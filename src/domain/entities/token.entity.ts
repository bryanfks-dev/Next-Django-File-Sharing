/**
 * Token is the entity class for the token.
 *
 * @property {string} token - The token
 */
export class Token {
  private _token: string;

  constructor(token: string) {
    this._token = token;
  }

  /**
   * token is the getter function of the token.
   *
   * @returns {string} The token
   */
  get token(): string {
    return this._token;
  }
}
