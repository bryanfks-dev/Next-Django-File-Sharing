/**
 * FieListView is a function that will be used to render the file list view.
 *
 * @returns {JSX.Element} The file list view.
 */
function FileListView(): JSX.Element {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
          className="size-16 text-gray-400"
        >
          <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
        </svg>

        <div className="flex flex-col">
          <span className="text-ellipsis whitespace-nowrap">
            Veryyy Veryyy Long Filename
            hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </span>
          <p className="text-gray-400">uploaded at Dec 8, 2024 &mdash; Public</p>
        </div>
      </div>

      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
          className="size-6 text-gray-400"
        >
          <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
        </svg>

        <div className="absolute bottom-0 right-0"></div>
      </div>
    </div>
  );
}

/**
 * FileList is a function that will be used to render the file list view.
 *
 * @returns {JSX.Element} The file list view.
 */
export default function FileList(): JSX.Element {
  return (
    <div className="grid space-y-2 md:hidden">
      <FileListView />
      <FileListView />
      <FileListView />
    </div>
  );
}
