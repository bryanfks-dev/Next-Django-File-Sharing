"use client";

import React from "react";

/**
 * WaitForApprovalPopUp is a component that will be used to display a pop-up menu when
 * the user successfully registered.
 *
 * @param {PopUpProps} props - the properties of the MenuPopUp component
 *
 * @see {@link PopUpProps} for more information
 *
 * @returns {JSX.Element} The MenuPopUp component.
 */
export default function WaitForApprovalPopUp(props: PopUpProps): JSX.Element {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-600 bg-opacity-50 md:inset-0">
      <div className="relative max-h-full w-full max-w-2xl p-4">
        <div className="relative rounded-lg bg-white shadow">
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
            <h3 className="text-xl font-semibold text-black">Hold uppp!</h3>
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
          <div className="p-4 md:p-5">
            Your account is already registered in the server, but it is not yet
            approved. Please wait for the approval from admin.
          </div>

          <div className="flex items-center justify-end rounded-b border-t border-gray-200 p-4 md:p-5">
            <button
              type="button"
              className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
              onClick={() => props.onClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
