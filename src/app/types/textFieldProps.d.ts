/**
 * TextFieldProps is an interface that defines the properties
 * of the TextField component.
 *
 * @property {string} inputLabel - The label for the input field.
 * @property {string} inputName - The name of the input field.
 * @property {"text" | "password" | "email" | "number" | "tel" | "url"} inputType - The type of the input field.
 * @property {string} inputPlaceholder - The placeholder for the input field.
 * @property {React.Node?} suffix - The suffix for the input field.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void?} onChange - The change event handler for the input field.
 */
interface TextFieldProps {
  inputLabel: string;
  inputName: string;
  inputType: "text" | "password" | "email" | "number" | "tel" | "url";
  inputPlaceholder: string;
  suffix?: React.Node;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
