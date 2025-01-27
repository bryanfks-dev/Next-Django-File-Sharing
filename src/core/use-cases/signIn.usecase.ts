import { UserDto } from "@/domain/dto/user.dto";
import { Token } from "@/domain/entities/token.entity";
import { User } from "@/domain/entities/user.entity";
import { AuthenticationRepository } from "@/infrastructure/repositories/authentication.repository.interface";
import { ValidationError } from "../errors/validation.error";
import { ErrorDto } from "@/domain/dto/error.dto";
import { AuthenticationError } from "../errors/authentication.error";
import axios from "axios";

export class SignInUsecase {
  constructor(private authenticationRepository: AuthenticationRepository) {}

  async execute(
    username: string,
    password: string,
  ): Promise<{ user: User; token: Token }> {
    try {
      // Call the API to sign in the user
      const response = await this.authenticationRepository.signIn(
        username,
        password,
      );

      // Check if the response status is 400
      if (response.status === 400) {
        throw new ValidationError((response.data as ErrorDto).error);
      }

      // Check if the response status is 401
      if (response.status === 401) {
        throw new AuthenticationError((response.data as ErrorDto).error);
      }
    } catch (error: unknown) {
      // Check if the error is an Axios error
      if (axios.isAxiosError(error)) {
        throw new Error("Failed to sign");
      }
    }
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
