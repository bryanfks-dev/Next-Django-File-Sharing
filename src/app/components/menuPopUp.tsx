import Link from "next/link";
import React from "react";

/**
 * MenuPopUp is a component that will be used to display a pop-up menu when
 * the user clicks on the menu icon.
 *
 * @returns {JSX.Element} The MenuPopUp component.
 */
export default function MenuPopUp(props: MenuPopUpProps): JSX.Element {
  /**
   * menuPropss is an array of menu properties that will be used to render the
   * menu list view.
   *
   * @type {MenuProps[]}
   *
   * @see {@link MenuProps} for more information
   */
  const menuPropss: MenuProps[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "My Group",
      href: "/my/groups",
    },
    {
      label: "My Files",
      href: "/my/files",
    },
  ];

  /**
   * menuListView is a function that will be used to render the menu list view.
   *
   * @param {MenuProps} menuProps - the menu properties
   *
   * @returns {JSX.Element} The menu list view.
   */
  const menuListView = (menuProps: MenuProps): JSX.Element => (
    <li>
      <Link href={menuProps.href} onClick={() => props.onClose()}>
        <div className="px-5 py-4 hover:bg-gray-100">{menuProps.label}</div>
      </Link>
    </li>
  );

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-600 bg-opacity-50 md:inset-0">
      <div className="relative max-h-full w-full max-w-2xl p-4">
        <div className="relative rounded-lg bg-white shadow">
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
            <h3 className="text-xl font-semibold text-black">
              Next Sharing Menus
            </h3>
            <button
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-black"
              onClick={() => props.onClose()}
            >
              <svg
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close pop up</span>
            </button>
          </div>
          <div className="pb-1">
            <ul className="divide-y">
              {/* Menu list views */}

              {menuPropss.map((menuProps: MenuProps, index: number) => (
                <React.Fragment key={index}>
                  {menuListView(menuProps)}
                </React.Fragment>
              ))}

              <li>
                <div className="cursor-pointer px-5 py-4 text-emerald-500 hover:bg-gray-100">
                  Upload New File
                </div>
              </li>

              {/* Optionally add a menu for managing new account */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
