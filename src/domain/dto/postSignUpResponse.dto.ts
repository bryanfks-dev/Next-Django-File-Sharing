import { ErrorDto } from "./error.dto";
import { UserDto } from "./user.dto";

/**
 * PostSignUpResponseDto is a data transfer object that represents the response
 * from the API when signing up a user.
 * 
 * @property {UserDto} user The user that was signed up.
 */
export type PostSignUpResponseDto = UserDto | ErrorDto;
