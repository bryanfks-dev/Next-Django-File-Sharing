"use client";

import { FormEvent, useState } from "react";
import TextField from "../components/textField";
import Link from "next/link";
import SignInDataValidator from "../validators/signInDataValidator";
import ValidationError from "../errors/validationError";

/**
 * Page is the sign-in page component.
 *
 * @returns {JSX.Element} The sign-in page component.
 */
export default function Page(): JSX.Element {
  /**
   * signInData is the state that contains the sign in data.
   * It is an object that contains the username and password.
   *
   * @type {{username: string, password: string}}
   */
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  /**
   * updateUsernameData updates the username data.
   *
   * @param {string} value The value to update the username with.
   *
   * @returns {void}
   */
  const updateUsernameData = (value: string): void => {
    setSignInData((prevState) => ({
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
    setSignInData((prevState) => ({
      ...prevState,
      password: value,
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
  const [usernameTextFieldProps, setUsernameTextFieldProps] =
    useState<TextFieldProps>({
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
    });

  /**
   * isPasswordVisible is the state that contains the visibility of the password.
   * It is a boolean value that determines if the password is visible or not.
   *
   * @type {boolean}
   */
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  /**
   * togglePasswordVisibility toggles the visibility of the password.
   *
   * @returns {void}
   */
  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  /**
   * passwordTextFieldProps is an object that contains the properties
   * for the password text field.
   *
   * @type {TextFieldProps}
   *
   * @see {@link TextFieldProps} for more information.
   */
  const [passwordTextFieldProps, setPasswordTextFieldProps] =
    useState<TextFieldProps>({
      inputLabel: "Password",
      inputName: "password",
      inputPlaceholder: "Enter password",
      inputType: isPasswordVisible ? "text" : "password",
      suffix: isPasswordVisible ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="size-4 cursor-pointer text-gray-400"
          fill="currentColor"
          onClick={() => togglePasswordVisibility()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 cursor-pointer text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => togglePasswordVisibility()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
        updatePasswordData(event.target.value);
      },
    });

  /**
   * validateSignInData is a function that validates the sign in data.
   *
   * @returns {boolean} A boolean value that determines if the sign in
   * data is valid.
   */
  const validateSignInData = (): boolean => {
    /**
     * isValidFlag is a boolean value that determines if the sign
     * in data is valid.
     *
     * @type {boolean}
     */
    let isValidFlag = true;

    try {
      // Validate the username data
      SignInDataValidator.validateUsername(signInData.username);
    } catch (error: unknown) {
      // Check if the error is not a validation error
      if (!(error instanceof ValidationError)) {
        throw error;
      }

      setUsernameTextFieldProps((prevState) => {
        prevState.errorText = error.message;

        return { ...prevState };
      });

      isValidFlag = false;
    }

    try {
      // Validate the password data
      SignInDataValidator.validatePassword(signInData.password);
    } catch (error: unknown) {
      // Check if the error is not a validation error
      if (!(error instanceof ValidationError)) {
        throw error;
      }

      setPasswordTextFieldProps((prevState) => {
        prevState.errorText = error.message;

        return { ...prevState };
      });

      isValidFlag = false;
    }

    return isValidFlag;
  };

  /**
   * handleSubmitSignInData is a function that handles the submit event
   * for the sign in data.
   *
   * @param {React.FormEvent<HTMLFormElement>} event The form event.
   *
   * @returns {void}
   */
  const handleSubmitSignInData = (
    event: React.FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();

    // Validate the sign in data
    if (!validateSignInData()) {
      return;
    }

    alert(signInData);
  };

  return (
    <div className="flex min-h-screen items-center">
      <div className="mx-auto -mt-20 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Sign in into your account
          </h1>

          <p className="mt-4 text-gray-500">
            Securely access your account, explore and start sharing files
            effortlessly in seconds.
          </p>
        </div>

        <form
          action=""
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={(e: FormEvent<HTMLFormElement>) =>
            handleSubmitSignInData(e)
          }
        >
          <TextField {...usernameTextFieldProps} />
          <TextField {...passwordTextFieldProps} />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?{" "}
              <Link className="underline" href="/sign-up">
                Sign up
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
