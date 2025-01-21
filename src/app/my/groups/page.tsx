"use client";

import MenuButton from "@/app/components/menuButton";
import MenuPopUp from "@/app/components/menuPopUp";
import PrimaryButton from "@/app/components/primaryButton";
import ScrollUpButton from "@/app/components/scrollUpButton";
import { useEffect, useState } from "react";
import GroupCard from "./components/groupCard";
import GroupTabs from "./components/groupTabs";

/**
 * Page component for the MyGroup page.
 *
 * @returns {JSX.Element} The MyFiles page component.
 */
export default function Page(): JSX.Element {
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

  return (
    <div className="relative h-screen">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-16">
        <div className="flex justify-between">
          <h5 className="text-3xl font-bold md:text-4xl md:font-semibold">
            My Groups
          </h5>

          <PrimaryButton
            buttonType="button"
            text="Create new group"
            onClick={() => {}}
          />
        </div>

        <div className="sticky left-0 top-0 mt-4 flex items-center gap-2 bg-white py-5">
          <MenuButton onClick={() => handleShowMenuPopUpOnClick()} />

          <GroupTabs />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>

      {/* Menu pop-up */}
      {showMenuPopUp && <MenuPopUp onClose={() => handleMenuPopUpOnClose()} />}

      {/* Scroll up button */}
      {showScrollUpButton && (
        <div className="fixed bottom-3 right-5 md:bottom-8 md:right-10">
          <ScrollUpButton />
        </div>
      )}
    </div>
  );
}
