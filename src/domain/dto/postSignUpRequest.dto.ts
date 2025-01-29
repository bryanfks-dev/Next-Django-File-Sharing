/**
 * PostSignUpRequestDto is the DTO for the post sign up request.
 *
 * @property {string} username - The username of the user
 * @property {string} password - The password of the user
 * @property {string} confirm_password - The confirmation password of the user
 */
export interface PostSignUpRequestDto {
  username: string;
  password: string;
  confirm_password: string;
}
