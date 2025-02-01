import { UUID } from "crypto";
import { UploadChannel } from "../enums/uploadChannel";
import { File } from "@/domain/entities/file.entity";

/**
 * FileRepository is an interface for the file repository.
 *
 * @function post - Posts a file to the repository.
 */
export interface FileRepository {
  /**
   * post is a method that posts a file to the repository.
   *
   * @param uploadChannel The channel to upload the file to
   * @param groupId The group id to upload the file to
   * @param fileStream The file stream to upload
   *
   * @returns A promise that resolves when the file is uploaded
   */
  post(
    uploadChannel: UploadChannel,
    fileStream: number,
    groupId?: UUID,
  ): Promise<File>;
}
