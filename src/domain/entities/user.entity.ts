/**
 * User is a class that represents a user entity.
 *
 * @property {string} id - The id of the user
 * @property {string} username - The username of the user
 * @property {Date} createdAt - The date the user was created
 * @property {Date} updatedAt - The date the user was last updated
 */
export class User {
  private _id: string;
  private _username: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(id: string, username: string, createdAt: Date, updatedAt: Date) {
    this._id = id;
    this._username = username;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  /**
   * id is the getter function of the user id
   *
   * @returns {string} The id of the user
   */
  get id(): string {
    return this._id;
  }

  /**
   * username is the getter function of the user username
   *
   * @returns {string} The username of the user
   */
  get username(): string {
    return this._username;
  }

  /**
   * createdAt is the getter function of the user creation date
   *
   * @returns {Date} The date the user was created
   */
  get createdAt(): Date {
    return this._createdAt;
  }

  /**
   * updatedAt is the getter function of the user last update date
   *
   * @returns {Date} The date the user was last updated
   */
  get updatedAt(): Date {
    return this._updatedAt;
  }
}
