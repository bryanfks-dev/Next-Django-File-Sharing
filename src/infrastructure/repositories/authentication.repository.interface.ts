import { PostSignInResponseDto } from "@/domain/dto/postSignInResponse.dto";
import { PostSignUpResponseDto } from "@/domain/dto/postSignUpResponse.dto";
import { AxiosResponse } from "axios";

export interface AuthenticationRepository {
  /**
   * signUp is a method that signs up a user.
   *
   * @param username The username of the user
   * @param password The password of the user
   * @param confirmPassword The password confirmation of the user
   *
   * @returns A promise that resolves when the user is signed up
   */
  signUp(
    username: string,
    password: string,
    confirmPassword: string,
  ): Promise<AxiosResponse<PostSignUpResponseDto, unknown>>;

  /**
   * signIn is a method that signs in a user.
   *
   * @param username The username of the user
   * @param password The password of the user
   *
   * @returns A promise that resolves when the user is signed in
   */
  signIn(
    username: string,
    password: string,
  ): Promise<AxiosResponse<PostSignInResponseDto, unknown>>;

  /**
   * validateToken is a method that validates the token of a user.
   *
   * @returns A promise that resolves when the token is valid
   */
  validateToken(): Promise<void>;
}
