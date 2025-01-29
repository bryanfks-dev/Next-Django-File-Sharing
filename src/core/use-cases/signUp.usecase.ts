import { UserDto } from "@/domain/dto/user.dto";
import { User } from "@/domain/entities/user.entity";
import { AuthenticationRepository } from "@/infrastructure/repositories/authentication.repository.interface";

/**
 * SignUpUsecase is a use case that is used to sign up a user.
 *
 * @param {AuthenticationRepository} authenticationRepository The authentication repository.
 *
 * @method execute The method is used to sign up a user.
 */
export class SignUpUsecase {
  constructor(private authenticationRepository: AuthenticationRepository) {}

  /**
   *
   * @param username
   * @param password
   * @param confirmPassword
   * @returns
   */
  async execute(
    username: string,
    password: string,
    confirmPassword: string,
  ): Promise<User> {
    // Call the API to sign up the user
    const response = await this.authenticationRepository.signUp(
      username,
      password,
      confirmPassword,
    );

    return this.convertUserDtoToEntity(response.data as UserDto);
  }

  /**
   * convertUserDtoToEntity is a helper function that converts a UserDto to a
   * User entity.
   *
   * @param userDto - The user DTO to convert
   *
   * @returns The user entity
   */
  private convertUserDtoToEntity(userDto: UserDto): User {
    return new User(
      userDto.id,
      userDto.username,
      userDto.createdAt,
      userDto.updatedAt,
    );
  }
}
