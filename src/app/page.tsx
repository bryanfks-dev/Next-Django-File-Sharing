"use client";

import { useEffect, useState } from "react";
import TextField from "./components/textField";
import FileCard from "./components/fileCard";
import ScrollUpButton from "./components/scrollUpButton";

/**
 * Page is the main page of the application.
 * It is the first page that users see when they visit the application (if logged in).
 *
 * @returns {JSX.Element} Page component
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
    console.log("scrolling");

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

  return (
    <div className="relative h-screen place-content-center">
      <div className="mt-20 w-full px-4 py-16 sm:px-6 lg:px-16">
        <div className="mx-auto text-center">
          <h1 className="text-5xl font-bold md:text-8xl md:font-semibold">
            ./Next Sharing.
          </h1>
          <p className="mt-6 text-lg font-light md:text-2xl">
            Explore and share files with friends, groups, and areas!
          </p>
        </div>

        <div className="sticky left-0 top-0 mt-6 bg-white py-5 md:mt-8">
          <div>
            <label htmlFor="search" className="sr-only">
              Search
            </label>

            <div className="relative">
              <input
                type="search"
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-lg shadow-sm outline-emerald-500 focus:border-emerald-500 lg:focus:outline-none"
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

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
        </div>
      </div>

      {/* Scroll up button */}
      {showScrollUpButton && (
        <div className="fixed bottom-3 right-5 md:bottom-8 md:right-10">
          <ScrollUpButton />
        </div>
      )}
    </div>
  );
}
