/**
 * AuthenticationError is a custom error class that extends the Error class.
 * It is used to represent an error that occurs when a user is not authenticated.
 *
 * @property {string} message  The error message.
 */
export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
