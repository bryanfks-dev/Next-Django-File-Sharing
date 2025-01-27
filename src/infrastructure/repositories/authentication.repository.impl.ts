import { apiClient } from "../services/api.service";
import { AxiosResponse } from "axios";
import { PostSignUpResponseDto } from "@/domain/dto/postSignUpResponse.dto";
import { AuthenticationRepository } from "./authentication.repository.interface";
import { PostSignInResponseDto } from "@/domain/dto/postSignInResponse.dto";

export class AuthenticationRepositoryImpl implements AuthenticationRepository {
  async signUp(
    username: string,
    password: string,
    confirmPassword: string,
  ): Promise<AxiosResponse<PostSignUpResponseDto, unknown>> {
    // Call the API to sign up the user
    const response = await apiClient.get<PostSignUpResponseDto>("/auth/signup");

    return response;
  }

  async signIn(
    username: string,
    password: string,
  ): Promise<AxiosResponse<PostSignInResponseDto, unknown>> {
    // Call the API to sign in the user
    const response = await apiClient.get<PostSignInResponseDto>("/auth/signin");

    return response;
  }

  async validateToken(): Promise<void> {
    // Call the API to validate the token
    const response = await apiClient.get("/token/validate");

    return response;
  }
}
