import clsx from "clsx";

/**
 * TextField is a component that allows users to input text.
 *
 * @param {TextFieldProps} props The properties of the text field component.
 * @see {@link TextFieldProps} for more information.
 *
 * @returns {JSX.Element} The text field component.
 */
export default function TextField(props: TextFieldProps): JSX.Element {
  return (
    <div>
      <label htmlFor={props.inputName} className="sr-only">
        {props.inputLabel}
      </label>

      <div className="relative">
        <input
          type={props.inputType}
          className={clsx(
            "w-full rounded-lg border p-4 pe-12 text-sm shadow-sm lg:focus:outline-none",
            props.errorText != undefined
              ? "border-red-500 outline-red-500 focus:border-red-500"
              : "border-gray-200 outline-emerald-500 focus:border-emerald-500",
          )}
          placeholder={props.inputPlaceholder}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            // Check if the onChange prop is not defined
            if (props.onChange == undefined) {
              return;
            }

            props.onChange(event);
          }}
        />

        {
          // The icon is only displayed if the icon prop is provided
          props.suffix && (
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {props.suffix}
            </span>
          )
        }
      </div>

      {props.errorText && (
        <p className="mt-1 text-sm text-red-500">{props.errorText}</p>
      )}
    </div>
  );
}
