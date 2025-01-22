"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * FieListView is a function that will be used to render the file list view.
 *
 * @returns {JSX.Element} The file list view.
 */
function FileListView(): JSX.Element {
  /**
   * fileMenuModalIsOpen is an object that determines whether the file menu modal
   * is open.
   *
   * @type {{[key: string]: boolean}}
   */
  const [fileMenuModalIsOpen, setFileMenuModalIsOpen] = useState<{
    [key: string]: boolean;
  }>({});

  /**
   * toggleFileMenuModalOn is a function that toggles the file menu modal.
   *
   * @param {string} fileId - the file id
   *
   * @returns {void}
   */
  const toggleFileMenuModalOn = (fileId: string): void => {
    setFileMenuModalIsOpen((prev) => ({ ...prev, [fileId]: !prev[fileId] }));
  };

  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-1 py-2">
      <div className="flex items-center gap-4 overflow-x-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
          className="size-8 text-gray-400"
        >
          <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
        </svg>

        <div className="overflow-x-hidden">
          <div className="flex items-center">
            <span className="block max-w-xs truncate font-medium text-gray-900">
              Veryyy Veryyy Long Filename
              hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.jpg
            </span>
            jpg
          </div>
          <p className="text-xs text-gray-400">
            uploaded at Dec 8, 2024 &mdash; to Public
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          id="menu-button"
          className="p-2 text-gray-400 hover:text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="size-6 text-gray-400"
            fill="currentColor"
          >
            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
          </svg>
        </button>

        <div
          id="menu-modal"
          className="absolute right-0 z-50 w-28 rounded-md bg-white py-1 shadow"
        >
          <ul className="divide-y">
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-emerald-500 hover:bg-gray-100"
              >
                Download
              </Link>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100">
                Delete File
              </button>
            </li>
          </ul>
        </div>
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
    <div className="space-y-2 md:hidden">
      <FileListView />
      <FileListView />
      <FileListView />
    </div>
  );
}
