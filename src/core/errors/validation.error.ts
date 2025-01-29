/**
 * ValidationError is a custom error class that extends the Error class.
 * This class is used to represent an error that occurs when the data
 * entered by the user is invalid.
 *
 * @property {string} message The error message that is displayed to the user.
 * @property {Record<string, string[]>} errors The error messages that are displayed to the user.
 */
export class ValidationError extends Error {
  /**
   * errorMessages is an object that contains the error messages that are
   * displayed to the user.
   *
   * @type {Record<string, string[]>}
   */
  errorMessages: Record<string, string[]>;

  constructor(errors: Record<string, string[]>) {
    super(errors.toString());

    this.errorMessages = errors;
  }
}
