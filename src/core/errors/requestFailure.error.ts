/**
 * RequestFailureError is thrown when a request fails.
 * This error is thrown when the request cannot reach server or no.
 *
 * @param {string} message The error message.
 */
export class RequestFailureError extends Error {
  constructor(message: string) {
    super(message);
  }
}
