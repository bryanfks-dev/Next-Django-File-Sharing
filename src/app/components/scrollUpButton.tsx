/**
 * ScrollUpButton is a button that scrolls the page to the top when clicked.
 *
 * @returns {JSX.Element} ScrollUpButton component
 */
export default function ScrollUpButton(): JSX.Element {
  /**
   * handleButtonClick scrolls the page to the top when the button is clicked.
   *
   * @returns {void}
   */
  const handleButtonClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="rounded-full bg-black p-3"
      onClick={() => handleButtonClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-6 text-white md:size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
