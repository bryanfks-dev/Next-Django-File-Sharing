import { ValidationError } from "../../core/errors/validation.error";

/**
 * SignUpDataValidator is a class that contains static methods that are used to
 * validate the data that is entered by the user when signing up.
 *
 * The class contains the following static methods:
 * @method validateUsername - validates the username that is entered by the user.
 * @method validatePassword - validates the password that is entered by the user.
 * @method validateConfirmPassword - validates the confirm password that is entered by the user.
 */
export class SignUpDataValidator {
  /**
   * validateUsername is a static method that validates the username that is
   * entered by the user when signing up.
   *
   * @param {string} username represents the username that is entered
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
   * entered by the user when signing up.
   *
   * @param {string} password represents the password that is entered by the
   *
   * @returns {void}
   */
  static validatePassword(password: string): void {
    /**
     * minimumLength represents the minimum length that the password
     * must be.
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

  /**
   * validateConfirmPassword is a static method that validates the confirm
   * password that is entered by the user when signing up.
   *
   * @param {string} confirmPassword represents the confirm password that is
   * entered by the user when signing up.
   * @param {string} password represents the password that is entered by the
   * user when signing up.
   *
   * @returns {void}
   */
  static validateConfirmPassword(
    confirmPassword: string,
    password: string,
  ): void {
    /**
     * minimumLength represents the minimum length that the password
     * must be.
     */
    const minimumLength: number = 8;

    // Check if the confirm password is empty
    if (confirmPassword.length === 0) {
      throw new ValidationError("Confirm password is required");
    }

    // Check if the confirm password is less than minimum length
    if (confirmPassword.length < minimumLength) {
      throw new ValidationError(
        `Confirm password must be at least ${minimumLength} characters`,
      );
    }

    // Check if the confirm password is not equal to the password
    if (confirmPassword !== password) {
      throw new ValidationError("Passwords do not match");
    }
  }
}
