/**
 * ValidationError is a custom error class that extends the Error class.
 * This class is used to represent an error that occurs when the data
 * entered by the user is invalid.
 *
 * @param {string} message The error message that is displayed to the user.
 */
export default class ValidationError extends Error {
  /**
   * constructor is the constructor for the ValidationError class.
   *
   * @param {string} message The error message that is displayed to the user.
   */
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
