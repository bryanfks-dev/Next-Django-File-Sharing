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
          className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm outline-emerald-500 focus:border-emerald-500 lg:focus:outline-none"
          placeholder={props.inputPlaceholder}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            if (props.onChange == null) {
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
    </div>
  );
}
