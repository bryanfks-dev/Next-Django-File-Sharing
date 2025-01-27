/**
 * UserDto is a data transfer object that represents a user.
 *
 * @property {string} id - The id of the user
 * @property {string} username - The username of the user
 * @property {Date} createdAt - The date the user was created
 * @property {Date} updatedAt - The date the user was last updated
 */
export interface UserDto {
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}
