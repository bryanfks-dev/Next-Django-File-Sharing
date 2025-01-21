/**
 * PrimaryButton is a React component that displays a primary button.
 *
 * @param {PrimaryButtonProps} props The props for the PrimaryButton component.
 *
 * @returns {JSX.Element} The PrimaryButton component.
 */
export default function PrimaryButton(props: PrimaryButtonProps): JSX.Element {
  return (
    <button
      type={props.buttonType}
      className="inline-block rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-50"
      onClick={() => {
        // Check if the onClick prop is not defined
        if (props.onClick == undefined) {
          return;
        }

        props.onClick();
      }}
    >
      {props.text}
    </button>
  );
}
