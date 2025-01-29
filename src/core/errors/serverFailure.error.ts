/**
 * ServerFailureError is a custom error class that extends the Error class.
 * The class is used to represent a server failure error.
 *
 * @param {string} message The error message.
 */
export class ServerFailureError extends Error {
  constructor(message: string) {
    super(message);
  }
}
