"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "./components/primaryButton";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * Page is the 404 page component.
 *
 * @returns {JSX.Element} The 404 page component.
 */
export default function Page(): JSX.Element {
  /**
   * router is the router instance.
   *
   * @type {AppRouterInstance}
   */
  const router: AppRouterInstance = useRouter();

  /**
   * redirectToHome is a function that redirects the user to
   * the home page.
   *
   * @returns {void}
   */
  const redirectToHome = (): void => {
    router.push("/");
  };

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can&lsquo;t find that page.</p>

        <PrimaryButton
          buttonType="button"
          text="Go back home"
          className="mt-6"
          onClick={() => redirectToHome()}
        />
      </div>
    </div>
  );
}
