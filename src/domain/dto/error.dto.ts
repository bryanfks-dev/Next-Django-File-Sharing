/**
 * ErrorDto is a data transfer object that represents an error.
 *
 * @param {string | Record<string, string[]>} error The error message.
 */
export interface ErrorDto {
  error: string | Record<string, string[]>;
}
