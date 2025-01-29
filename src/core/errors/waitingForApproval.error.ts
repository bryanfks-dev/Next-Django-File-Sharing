/**
 * WaitingForApprovalError is thrown when the user is waiting for approval.
 * This class is used to represent an error that occurs when the user is waiting
 * for approval.
 *
 * @property {string} message The error message that is displayed to the user.
 */
export class WaitingForApprovalError extends Error {
  constructor(message: string) {
    super(message);
  }
}
