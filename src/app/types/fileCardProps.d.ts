/**
 * FileCardProps is an interface that defines the properties
 * of the FileCard component.
 *
 * @property {string} fileName - the name of the file
 * @property {number} fileSize - the size of the file
 * @property {string} fileDownloadLink - the download link of the file
 */
interface FileCardProps {
  fileName: string;
  fileSize: number;
  fileDownloadLink: string;
}
