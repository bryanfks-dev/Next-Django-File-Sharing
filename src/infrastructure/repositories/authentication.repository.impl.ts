import { apiClient } from "../services/api.service";
import axios, { AxiosError, AxiosResponse } from "axios";
import { PostSignUpResponseDto } from "@/domain/dto/postSignUpResponse.dto";
import { AuthenticationRepository } from "./authentication.repository.interface";
import { PostSignInResponseDto } from "@/domain/dto/postSignInResponse.dto";
import { PostSignUpRequestDto } from "@/domain/dto/postSignUpRequest.dto";
import { PostSignInRequestDto } from "@/domain/dto/postSignInRequest.dto";
import { ValidationError } from "@/core/errors/validation.error";
import { ErrorDto } from "@/domain/dto/error.dto";
import { ServerFailureError } from "@/core/errors/serverFailure.error";
import { AuthenticationError } from "@/core/errors/authentication.error";

/**
 * AuthenticationRepositoryImpl is the implementation of the AuthenticationRepository interface.
 * This class is responsible for making the API calls to the authentication endpoints.
 */
export class AuthenticationRepositoryImpl implements AuthenticationRepository {
  async signUp(
    username: string,
    password: string,
    confirmPassword: string,
  ): Promise<AxiosResponse<PostSignUpResponseDto, unknown>> {
    // Create the request DTO
    const requestDto: PostSignUpRequestDto = {
      username: username,
      password: password,
      confirm_password: confirmPassword,
    };

    try {
      // Call the API to sign up the user
      const response = await apiClient.post<PostSignUpResponseDto>(
        "/auth/signup",
        requestDto,
      );

      // Check for http status codes
      if (response.status !== axios.HttpStatusCode.Created) {
        throw new Error("Unexpected status code");
      }

      return response;
    } catch (error) {
      // Check if the error is an AxiosError
      if (!axios.isAxiosError(error)) {
        throw error;
      }

      // Cast the error to an AxiosError
      const axiosError = error as AxiosError;

      // Check if the error is a network error
      if (!axiosError.response) {
        throw new Error("No response from the server");
      }

      // Check for http status codes
      switch (axiosError.response?.status) {
        case axios.HttpStatusCode.BadRequest:
          throw new ValidationError(
            (axiosError.response?.data as ErrorDto).error as Record<
              string,
              string[]
            >,
          );

        case axios.HttpStatusCode.InternalServerError:
          throw new ServerFailureError(
            (axiosError.response?.data as ErrorDto).error as string,
          );
      }

      // Throw the error if it is not a network error
      throw axiosError;
    }
  }

  async signIn(
    username: string,
    password: string,
  ): Promise<AxiosResponse<PostSignInResponseDto, unknown>> {
    try {
      // Create the request DTO
      const requestDto: PostSignInRequestDto = {
        username: username,
        password: password,
      };

      // Call the API to sign in the user
      const response = await apiClient.post<PostSignInResponseDto>(
        "/auth/signin",
        requestDto,
      );

      if (response.status !== axios.HttpStatusCode.Ok) {
        throw new Error("Unexpected status code");
      }

      return response;
    } catch (error) {
      // Check if the error is an AxiosError
      if (!axios.isAxiosError(error)) {
        throw error;
      }

      // Cast the error to an AxiosError
      const axiosError = error as AxiosError;

      // Check if the error is a network error
      if (!axiosError.response) {
        throw new Error("No response from the server");
      }

      // Check for http status codes
      switch (axiosError.response?.status) {
        case axios.HttpStatusCode.BadRequest:
          throw new ValidationError(
            (axiosError.response?.data as ErrorDto).error as Record<
              string,
              string[]
            >,
          );

        case axios.HttpStatusCode.InternalServerError:
          throw new ServerFailureError(
            (axiosError.response?.data as ErrorDto).error as string,
          );

        case axios.HttpStatusCode.Unauthorized:
          throw new AuthenticationError(
            (axiosError.response?.data as ErrorDto).error as string,
          );
      }

      // Throw the error if it is not a network error
      throw axiosError;
    }
  }

  async validateToken(): Promise<void> {
    // Call the API to validate the token
    const response = await apiClient.get("/token/validate");

    return response;
  }
}
