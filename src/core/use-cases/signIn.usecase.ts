import { UserDto } from "@/domain/dto/user.dto";
import { Token } from "@/domain/entities/token.entity";
import { User } from "@/domain/entities/user.entity";
import { AuthenticationRepository } from "@/infrastructure/repositories/authentication.repository.interface";
import { PostSignInResponseDto } from "@/domain/dto/postSignInResponse.dto";

export class SignInUsecase {
  constructor(private authenticationRepository: AuthenticationRepository) {}

  async execute(
    username: string,
    password: string,
  ): Promise<{ user: User; token: Token }> {
    // Call the API to sign in the user
    const response = await this.authenticationRepository.signIn(
      username,
      password,
    );

    // Convert the response data to a PostSignInResponseDto
    const responseDto = response.data as PostSignInResponseDto;

    return {
      user: this.convertUserDtoToEntity(responseDto.user!),
      token: this.convertTokenDtoToEntity(responseDto.token!),
    };
  }

  /**
   * convertUserDtoToEntity is a method that is used to convert a UserDto to a User entity.
   *
   * @param {UserDto} userDto The user DTO.
   *
   * @returns {User} The user entity.
   */
  private convertUserDtoToEntity(userDto: UserDto): User {
    return new User(
      userDto.id,
      userDto.username,
      userDto.createdAt,
      userDto.updatedAt,
    );
  }

  /**
   * convertTokenDtoToEntity is a method that is used to convert a token DTO to a token entity.
   *
   * @param {string} token The token DTO.
   *
   * @returns {Token} The token entity.
   */
  private convertTokenDtoToEntity(token: string): Token {
    return new Token(token);
  }
}
