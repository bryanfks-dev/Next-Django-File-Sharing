import { UserDto } from "@/domain/dto/user.dto";
import { User } from "@/domain/entities/user.entity";
import { AuthenticationRepository } from "@/infrastructure/repositories/authentication.repository.interface";
import axios from "axios";
import { ValidationError } from "../errors/validation.error";
import { ErrorDto } from "@/domain/dto/error.dto";
import { ServerFailure } from "../errors/serverFailure.error";

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
    try {
      // Call the API to sign up the user
      const response = await this.authenticationRepository.signUp(
        username,
        password,
        confirmPassword,
      );

      // Check if the response status is 400
      if (response.status === axios.HttpStatusCode.BadRequest) {
        throw new ValidationError((response.data as ErrorDto).error);
      }

      // Check if the response status is 500
      if (response.status === axios.HttpStatusCode.InternalServerError) {
        throw new ServerFailure((response.data as ErrorDto).error);
      }

      return this.convertUserDtoToEntity(response.data as UserDto);
    } catch (error: unknown) {
      // Check if the error is an AxiosError
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }

      throw error;
    }
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
