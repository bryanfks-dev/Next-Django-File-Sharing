import { User } from "./user.entity";

/**
 * File is a class that represents a file entity.
 * 
 * @property {string} id - The id of the file
 * @property {string} fileName - The name of the file
 * @property {number} fileSize - The size of the file
 * @property {string} fileCategory - The category of the file
 * @property {User} uploadedBy - The user who uploaded the file
 * @property {Date} createdAt - The date the file was created
 * @property {Date} updatedAt - The date the file was last updated
 */
export class File {
  private _id: string;
  private _fileName: string;
  private _fileSize: number;
  private _fileCategory: string;
  private _uploadedBy: User;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    fileName: string,
    fileSize: number,
    fileCateogry: string,
    uploadedBy: User,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this._id = id;
    this._fileName = fileName;
    this._fileSize = fileSize;
    this._fileCategory = fileCateogry;
    this._uploadedBy = uploadedBy;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get id(): string {
    return this._id;
  }

  get fileName(): string {
    return this._fileName;
  }

  get fileSize(): number {
    return this._fileSize;
  }

  get fileCategory(): string {
    return this._fileCategory;
  }

  get uploadedBy(): User {
    return this._uploadedBy;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  public fileSizeText(): string {
    // Convert file size into string
    const sizeString: string = this._fileSize.toString();

    // Check if file size digits is less than 6
    if (sizeString.length < 6) {
      return `${(this._fileSize / 1024).toFixed(2)} KB`;
    }

    return `${(this._fileSize / (1024 * 1024)).toFixed(2)} MB`;
  }
}
