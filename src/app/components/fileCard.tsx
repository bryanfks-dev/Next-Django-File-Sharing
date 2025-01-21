import Link from "next/link";

/**
 * FileCard is a component that represents a file card.
 *
 * @returns {JSX.Element} FileCard component
 */
export default function FileCard(): JSX.Element {
  return (
    <div className="cursor-pointer rounded-md p-4 shadow hover:bg-gray-100 hover:ring-2 hover:ring-gray-500 hover:ring-opacity-30">
      <div>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            className="size-20 text-gray-400"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </svg>
        </div>
        <div className="flex items-end">
          <p className="mt-6 overflow-x-hidden text-ellipsis text-nowrap">
            So Longgggg Filename
            hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.jpg
          </p>

          {/* File extension */}
          <p>jpg</p>
        </div>

        <p className="text-sm text-gray-400">Size 1.1Mb</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          by{" "}
          <Link className="cursor-pointer underline" href="/">
            Bryan
          </Link>
        </p>

        <div className="space-x-2">
          <button type="button">
            <span className="sr-only">Download</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
              className="size-8 text-emerald-400"
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
