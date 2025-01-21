import clsx from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

/**
 * GroupTabs is a component that represents the tabs for the groups page.
 *
 * @returns {JSX.Element} Tabs component
 */
export default function GroupTabs(): JSX.Element {
  const tabPropss: TabProps[] = [
    {
      text: "My Groups",
      href: "/my/groups",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
    {
      text: "Group Invitations",
      href: "/my/groups/invitations",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
          />
        </svg>
      ),
    },
  ];

  /**
   * router is a variable that stores the current router.
   *
   * @type {AppRouterInstance}
   */
  const router: AppRouterInstance = useRouter();

  /**
   * pathName is a variable that stores the current path name.
   *
   * @type {string}
   */
  const pathName: string = usePathname();

  /**
   * isSelected is a function that checks if the current route is selected.
   *
   * @param {string} currentRoute - the current route to check
   *
   * @returns {boolean} whether the current route is selected
   */
  const isSelected = (currentRoute: string): boolean => {
    return pathName === currentRoute;
  };

  /**
   * redirectTo is a function that redirects the user to a specific href.
   *
   * @param href The href to redirect to
   *
   * @returns {void}
   */
  const redirectTo = (href: string): void => {
    router.push(href);
  };

  /**
   * tabOption is a function that returns a tab option.
   *
   * @param {TabProps} tabProps - the tab props
   *
   * @returns {JSX.Element} the tab option
   */
  const tabOption = (tabProps: TabProps): JSX.Element => (
    <option
      onClick={() => redirectTo(tabProps.href)}
      className={clsx(
        "block px-4 py-2 text-sm",
        isSelected(tabProps.href) && "font-semibold",
      )}
    >
      {tabProps.text}
    </option>
  );

  /**
   * tabMenu is a function that returns a tab menu.
   *
   * @param {TabProps} tabProps - the tab props
   *
   * @returns {JSX.Element} the tab menu
   */
  const tabMenu = (tabProps: TabProps): JSX.Element => (
    <Link
      href={tabProps.href}
      className={clsx(
        "inline-flex shrink-0 items-center gap-2 border-b-4 px-1 pb-4 font-medium",
        isSelected(tabProps.href)
          ? "border-emerald-500 text-emerald-500"
          : "border-transparent text-gray-500 hover:text-gray-700",
      )}
      aria-current={isSelected(tabProps.href) ? "page" : undefined}
    >
      {tabProps.icon!}
      {tabProps.text}
    </Link>
  );

  return (
    <div className="flex-1">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select
          id="Tab"
          className="w-full rounded-md border-gray-200 px-4 py-3"
        >
          {tabPropss.map((tabProps: TabProps, index: number) => (
            <React.Fragment key={index}>{tabOption(tabProps)}</React.Fragment>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {tabPropss.map((tabProps: TabProps, index: number) => (
              <React.Fragment key={index}>{tabMenu(tabProps)}</React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
