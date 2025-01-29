import { ErrorDto } from "./error.dto";
import { UserDto } from "./user.dto";

/**
 * PostSignInResponseDto is a data transfer object that represents the response
 * from the API when signing in a user.
 * 
 * @extends {ErrorDto} ErrorDto
 *
 * @property {UserDto} user The user that was signed in.
 * @property {string} token The token that was generated for the user.
 */
export interface PostSignInResponseDto extends Partial<ErrorDto> {
  user?: UserDto;
  token?: string;
}
