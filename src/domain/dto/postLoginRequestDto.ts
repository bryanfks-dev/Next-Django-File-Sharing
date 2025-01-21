/**
 * PostLoginRequestDto is the DTO for the login request
 *
 * @property {string} username - The username of the user
 * @property {string} password - The password of the user
 */
export default interface PostLoginRequestDto {
  username: string;
  password: string;
}
