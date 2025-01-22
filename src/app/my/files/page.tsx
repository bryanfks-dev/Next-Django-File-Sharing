"use client";

import MenuButton from "@/app/components/menuButton";
import FileTable from "./components/fileTable";
import { useEffect, useState } from "react";
import FileList from "./components/fileList"; // Ensure the correct import path
import MenuPopUp from "@/app/components/menuPopUp";
import PrimaryButton from "@/app/components/primaryButton";
import UploadFilePopUp from "@/app/components/uploadFilePopUp";

/**
 * Page is a component for MyFiles page.
 *
 * @returns {JSX.Element} The My Files page component.
 */
export default function Page(): JSX.Element {
  /**
   * searchQuery is the search query that users enter in the search bar.
   *
   * @type {string}
   */
  const [searchQuery, setSearchQuery] = useState<string>("");

  /**
   * updateSearchQuery updates the search query with the new query.
   *
   * @param {string} query - the new search query
   *
   * @returns {void}
   */
  const updateSearchQuery = (query: string): void => {
    setSearchQuery(query);
  };

  /**
   * showScrollUpButton is a boolean that determines whether the scroll up
   * button is shown.
   *
   * @type {boolean}
   */
  const [showScrollUpButton, setShowScrollUpButton] = useState<boolean>(false);

  /**
   * handleShowScrollUpButtonOnScroll is a function that handles showing the
   * scroll up button when the user scrolls down.
   *
   * @returns {void}
   */
  const handleShowScrollUpButtonOnScroll = (): void => {
    // If the user has scrolled down more than the window height, show the
    // scroll up button
    if (scrollY > innerHeight - 80) {
      setShowScrollUpButton(true);

      return;
    }

    setShowScrollUpButton(false);
  };

  /**
   * useEffect that adds an event listener to the window to show the scroll up
   * button when the user scrolls down.
   */
  useEffect(() => {
    window.addEventListener("scroll", handleShowScrollUpButtonOnScroll);

    return () => {
      window.removeEventListener("scroll", handleShowScrollUpButtonOnScroll);
    };
  }, [showScrollUpButton]);

  /**
   * showMenuPopUp is a boolean that determines whether the menu pop-up is shown.
   *
   * @type {boolean}
   */
  const [showMenuPopUp, setShowMenuPopUp] = useState<boolean>(false);

  /**
   * openMenuPopUp is a function that opens the menu pop-up.
   *
   * @returns {void}
   */
  const openMenuPopUp = (): void => {
    setShowMenuPopUp(true);
  };

  /**
   * closeMenuPopUp is a function that closes the menu pop-up.
   *
   * @returns {void}
   */
  const closeMenuPopUp = (): void => {
    setShowMenuPopUp(false);
  };

  /**
   * handleShowMenuPopUpOnClick is a function that handles showing the menu
   * pop-up when the user clicks on the menu button.
   *
   * @returns {void}
   */
  const handleShowMenuPopUpOnClick = (): void => {
    openMenuPopUp();

    // Disable scrolling when the menu pop-up is shown
    document.body.style.overflow = "hidden";
  };

  /**
   * handleMenuPopUpOnClose is a function that handles closing the menu pop-up
   * when the user clicks on the close button.
   *
   * @returns {void}
   */
  const handleMenuPopUpOnClose = (): void => {
    closeMenuPopUp();

    // Enable scrolling when the menu pop-up is closed
    document.body.style.overflow = "auto";
  };

  /**
   * showUploadFilePopUp is a boolean that determines whether the upload file
   * pop-up is shown.
   *
   * @type {boolean}
   */
  const [showUploadFilePopUp, setShowUploadFilePopUp] =
    useState<boolean>(false);

  /**
   * openUploadFilePopUp is a function that opens the upload file pop-up.
   *
   * @returns {void}
   */
  const openUploadFilePopUp = (): void => {
    setShowUploadFilePopUp(true);
  };

  /**
   * closeUploadFilePopUp is a function that closes the upload file pop-up.
   *
   * @returns {void}
   */
  const closeUploadFilePopUp = (): void => {
    setShowUploadFilePopUp(false);
  };

  /**
   * handleShowUploadFilePopUpOnClick is a function that handles showing the
   * upload file pop-up when the user clicks on the upload file button.
   *
   * @returns {void}
   */
  const handleShowUploadFilePopUpOnClick = (): void => {
    openUploadFilePopUp();

    // Disable scrolling when the menu pop-up is shown
    document.body.style.overflow = "hidden";
  };

  /**
   * handleUploadFilePopUpOnClose is a function that handles closing the upload
   * file pop-up when the user clicks on the close button.
   *
   * @returns {void}
   */
  const handleUploadFilePopUpOnClose = (): void => {
    closeUploadFilePopUp();

    // Enable scrolling when the upload file pop-up is closed
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative h-screen">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          <h5 className="text-4xl font-bold md:text-5xl md:font-semibold">
            My Files
          </h5>

          <PrimaryButton
            buttonType="button"
            text="Upload file"
            className="hidden md:block"
            onClick={() => handleShowUploadFilePopUpOnClick()}
          />
        </div>

        <div className="sticky left-0 top-0 mt-3 flex gap-2 bg-white py-5 md:mt-8">
          <MenuButton onClick={() => handleShowMenuPopUpOnClick()} />

          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search
            </label>

            <div className="relative">
              <input
                type="search"
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 shadow-sm outline-emerald-500 focus:border-emerald-500 lg:focus:outline-none"
                placeholder="Search for files..."
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  updateSearchQuery(event.target.value)
                }
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <FileTable />

        <FileList />
      </div>

      {/* Menu pop-up */}
      {showMenuPopUp && <MenuPopUp onClose={() => handleMenuPopUpOnClose()} />}

      {/* Upload file pop-up */}
      {showUploadFilePopUp && (
        <UploadFilePopUp onClose={() => handleUploadFilePopUpOnClose()} />
      )}

      <div className="fixed bottom-3 right-5 md:hidden">
        <PrimaryButton
          buttonType="button"
          className="shadow-md"
          text="Upload file"
          onClick={() => handleShowUploadFilePopUpOnClick()}
        />
      </div>
    </div>
  );
}
