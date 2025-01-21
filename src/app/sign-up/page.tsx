"use client";

import { useState } from "react";
import TextField from "../components/textField";
import Link from "next/link";

/**
 * Page is the sign-up page component.
 *
 * @returns {JSX.Element} The sign-in page component.
 */
export default function Page(): JSX.Element {
  /**
   * signUpData is the state that contains the sign up data.
   * It is an object that contains the username, password, and
   * confirm password.
   *
   * @type {{username: string, password: string, confirmPassword: string}}
   */
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  /**
   * updateUsernameData updates the username data.
   *
   * @param {string} value The value to update the username with.
   *
   * @returns {void}
   */
  const updateUsernameData = (value: string): void => {
    setSignUpData((prevState) => ({
      ...prevState,
      username: value,
    }));
  };

  /**
   * updatePasswordData updates the password data.
   *
   * @param {string} value The value to update the password with.
   *
   * @returns {void}
   *
   */
  const updatePasswordData = (value: string): void => {
    setSignUpData((prevState) => ({
      ...prevState,
      password: value,
    }));
  };

  /**
   * updateConfirmPasswordData updates the confirm password data.
   *
   * @param {string} value The value to update the confirm password with.
   *
   * @returns {void}
   */
  const updateConfirmPasswordData = (value: string): void => {
    setSignUpData((prevState) => ({
      ...prevState,
      confirmPassword: value,
    }));
  };

  /**
   * usernameTextFieldProps is an object that contains the properties
   * for the username text field.
   *
   * @type {TextFieldProps}
   *
   * @see {@link TextFieldProps} for more information.
   */
  const usernameTextFieldProps: TextFieldProps = {
    inputLabel: "Username",
    inputName: "username",
    inputPlaceholder: "Enter username",
    inputType: "text",
    suffix: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    ),
    onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
      updateUsernameData(event.target.value);
    },
  };

  /**
   * passwordTextFieldProps is an object that contains the properties
   * for the password text field.
   *
   * @type {TextFieldProps}
   *
   * @see {@link TextFieldProps} for more information.
   */
  const passwordTextFieldProps: TextFieldProps = {
    inputLabel: "Password",
    inputName: "password",
    inputPlaceholder: "Enter password",
    inputType: "password",
    suffix: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="size-4 text-gray-400"
        fill="currentColor"
      >
        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
      </svg>
    ),
    onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
      updatePasswordData(event.target.value);
    },
  };

  /**
   * confirmPasswordTextFieldProps is an object that contains the properties
   * for the confirm password text field.
   *
   * @type {TextFieldProps}
   *
   * @see {@link TextFieldProps} for more information.
   */
  const confirmPasswordTextFieldProps: TextFieldProps = {
    inputLabel: "Confirm Password",
    inputName: "confirm-password",
    inputPlaceholder: "Re-enter password",
    inputType: "password",
    suffix: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="size-4 text-gray-400"
        fill="currentColor"
      >
        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
      </svg>
    ),
    onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
      updateConfirmPasswordData(event.target.value);
    },
  };

  return (
    <div className="flex min-h-screen items-center">
      <div className="mx-auto -mt-20 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Sign up an account</h1>

          <p className="mt-4 text-gray-500">
            Enter your details to create a new account and join us to unlock
            seamless file sharing and storage..
          </p>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <TextField {...usernameTextFieldProps} />
          <TextField {...passwordTextFieldProps} />
          <TextField {...confirmPasswordTextFieldProps} />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Has an account?{" "}
              <Link className="underline" href="/sign-in">
                Sign in
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
