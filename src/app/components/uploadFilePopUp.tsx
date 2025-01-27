"use client";

import { UploadChannel } from "@/infrastructure/enums/uploadChannel";
import { useState } from "react";
import PrimaryButton from "./primaryButton";
import clsx from "clsx";

/**
 * UploadFilePopUp is a component that displays a pop up htmlFor uploading files
 * to the application.
 *
 * @param {PopUpProps} props - the properties of the UploadFilePopUp component
 *
 * @see {@link PopUpProps} htmlFor more inhtmlFormation
 *
 * @returns {JSX.Element} The UploadFilePopUp component.
 */
export default function UploadFilePopUp(props: PopUpProps): JSX.Element {
  /**
   * uploadFileData is an object that contains the data htmlFor uploading a file.
   *
   * @type {{uploadChannel: UploadChannel, file: File | null}}
   */
  const [uploadFileData, setUploadFileData] = useState<{
    uploadChannel: UploadChannel;
    file: File | null;
  }>({
    uploadChannel: UploadChannel.Public,
    file: null,
  });

  /**
   * updateUploadChannelData is a function that updates the upload channel data.
   *
   * @param {UploadChannel} channel - the upload channel
   *
   * @returns {void}
   */
  const updateUploadChannelData = (channel: UploadChannel): void => {
    setUploadFileData((prevState) => ({
      ...prevState,
      uploadChannel: channel,
    }));
  };

  /**
   * updateFileData is a function that updates the file data.
   *
   * @param {File} file - the file to upload
   *
   * @returns {void}
   */
  const updateFileData = (file: File): void => {
    setUploadFileData((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  /**
   * selectedGroup is a string that contains the selected group to upload the
   * file to.
   *
   * @type {string}
   */
  const [selectedGroupData, setSelectedGroupData] = useState<string>("");

  /**
   * updateSelectedGroup updates the selected group to upload the file to.
   *
   * @param {string} group - the selected group
   *
   * @returns {void}
   */
  const updateSelectedGroupData = (group: string): void => {
    setSelectedGroupData(group);
  };

  /**
   * isReadOnlyForm is a boolean that determines if the input is read only.
   *
   * This is used to prevent the user from editing the input, after sending the
   * data to the server.
   *
   * @type {boolean}
   */
  const [isReadOnlyForm, setIsReadOnlyForm] = useState<boolean>(false);

  /**
   * toggleReadOnlyForm is a function that toggles the read only state
   * of the form.
   *
   * @returns {void}
   */
  const toggleReadOnlyForm = (): void => {
    setIsReadOnlyForm((prevState) => !prevState);
  };

  /**
   * isSuccess is a boolean that determines if the upload was successful.
   *
   * @type {boolean}
   */
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  /**
   * toggleIsSuccess is a function that toggles the success state of the upload.
   *
   * @returns {void}
   */
  const toggleIsSuccess = (): void => {
    setIsSuccess((prevState) => !prevState);
  };

  /**
   * showUploadSuccessNotification is a function that shows a notification when
   * the upload is successful.
   *
   * @returns {void}
   */
  const showUploadSuccessNotification = (): void => {};

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-600 bg-opacity-50 md:inset-0">
        <div className="relative max-h-full w-full max-w-2xl p-4">
          <div className="relative rounded-lg bg-white shadow">
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Upload File
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
              <form
                action=""
                className="min-w-full max-w-md space-y-4 px-5 py-4"
              >
                <fieldset className="space-y-4" disabled={isReadOnlyForm}>
                  <span>Where do you want to upload this file(s)?</span>

                  <legend className="sr-only">
                    Where do you want to upload this files?
                  </legend>

                  <div>
                    <label
                      htmlFor="ChannelPublic"
                      className={clsx(
                        "flex cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm has-[:checked]:border-emerald-500 has-[:checked]:ring-1 has-[:checked]:ring-emerald-500",
                        isReadOnlyForm
                          ? "cursor-default bg-gray-200"
                          : "bg-white hover:border-gray-200",
                      )}
                    >
                      <p className="text-gray-700">
                        Share this file(s) to public, so people in area can view
                        this file(s).
                      </p>

                      <input
                        type="radio"
                        name="ChannelPublic"
                        id="ChannelPublic"
                        className="sr-only"
                        onChange={() =>
                          updateUploadChannelData(UploadChannel.Public)
                        }
                        checked={
                          uploadFileData.uploadChannel === UploadChannel.Public
                        }
                      />
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="ChannelGroup"
                      className={clsx(
                        "flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm has-[:checked]:border-emerald-500 has-[:checked]:ring-1 has-[:checked]:ring-emerald-500",
                        isReadOnlyForm
                          ? "cursor-default bg-gray-200"
                          : "bg-white hover:border-gray-200",
                      )}
                    >
                      <p className="text-gray-700">
                        Share this file(s) to one of my groups.
                      </p>

                      {uploadFileData.uploadChannel === UploadChannel.Group && (
                        <select
                          name="SelectorGroup"
                          className="cursor-pointer bg-white text-gray-700 sm:text-sm"
                          defaultValue=""
                          onSelect={(
                            event: React.ChangeEvent<HTMLSelectElement>,
                          ) => updateSelectedGroupData(event.target.value)}
                        >
                          <option value="" disabled>
                            Please select group
                          </option>
                          <option value="JM">John Mayer</option>
                          <option value="SRV">Stevie Ray Vaughn</option>
                          <option value="JH">Jimi Hendrix</option>
                          <option value="BBK">B.B King</option>
                          <option value="AK">Albert King</option>
                          <option value="BG">Buddy Guy</option>
                          <option value="EC">Eric Clapton</option>
                        </select>
                      )}

                      <input
                        type="radio"
                        name="ChannelGroup"
                        id="ChannelGroup"
                        className="sr-only"
                        onChange={() =>
                          updateUploadChannelData(UploadChannel.Group)
                        }
                        checked={
                          uploadFileData.uploadChannel === UploadChannel.Group
                        }
                      />
                    </label>
                  </div>
                </fieldset>

                <div className="flex w-full items-center justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className={clsx(
                      "flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2",
                      isReadOnlyForm
                        ? "cursor-default bg-gray-200"
                        : "border-dashed border-gray-300 bg-white hover:bg-gray-100",
                    )}
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm font-semibold text-gray-500">
                        Click to upload
                      </p>
                      <p className="text-xs text-gray-500">Any File(s)</p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      disabled={isReadOnlyForm}
                    />
                  </label>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-end rounded-b border-t border-gray-200 p-4 md:p-5">
              <PrimaryButton buttonType="submit" text="Upload" />
              <button
                data-modal-hide="static-modal"
                type="button"
                className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success notification */}
      {isSuccess && (
        <div
          role="alert"
          className="fixed right-5 top-3 z-[51] rounded-xl border border-gray-100 bg-white p-4"
        >
          <div className="flex items-start gap-4">
            <span className="text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-gray-900">
                {" "}
                Changes saved{" "}
              </strong>

              <p className="mt-1 text-sm text-gray-700">
                Your product changes have been saved.
              </p>
            </div>

            <button className="text-gray-500 transition hover:text-gray-600">
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
