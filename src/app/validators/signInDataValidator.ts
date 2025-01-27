import { ValidationError } from "../../core/errors/validation.error";

/**
 * SignInDataValidator is a class that validates the data that is entered by
 * the user when signing in.
 *
 * The class contains the following static methods:
 * @method validateUsername - validates the username that is entered by the user.
 * @method validatePassword - validates the password that is entered by the user.
 */
export class SignInDataValidator {
  /**
   * validateUsrname is a static method that validates the username that is
   * entered by the user when signing in.
   *
   * @param {string} username represents the username that is entered
   * by the user when signing in.
   *
   * @returns {void}
   */
  static validateUsername(username: string): void {
    /**
     * minimumLength represents the minimum length that the username
     * must be.
     *
     * @type {number}
     */
    const minimumLength: number = 5;

    // Check if the username is empty
    if (username.length === 0) {
      throw new ValidationError("Username is required");
    }

    // Check if the username is less than minimum length
    if (username.length < minimumLength) {
      throw new ValidationError(
        `Username must be at least ${minimumLength} characters`,
      );
    }
  }

  /**
   * validatePassword is a static method that validates the password that is
   * entered by the user when signing in.
   *
   * @param {string} password represents the password that is entered
   * by the user when signing in.
   *
   * @returns {void}
   */
  static validatePassword(password: string): void {
    /**
     * minimumLength represents the minimum length that the password
     * must be.
     *
     * @type {number}
     */
    const minimumLength: number = 8;

    // Check if the password is empty
    if (password.length === 0) {
      throw new ValidationError("Password is required");
    }

    // Check if the password is less than minimum length
    if (password.length < minimumLength) {
      throw new ValidationError(
        `Password must be at least ${minimumLength} characters`,
      );
    }
  }
}
