/**
 * MenuButton is a button component that displays a menu icon.
 *
 * @param {MenuButtonProps} props - The props of the component.
 *
 * @returns {JSX.Element} MenuButton component
 */
export default function MenuButton(props: MenuButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="rounded-lg border px-4 py-2 hover:bg-gray-100 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 md:px-6"
      onClick={() => props.onClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-8 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
