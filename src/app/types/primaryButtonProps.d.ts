/**
 * PrimaryButtonProps is an interface that defines the props for the
 * PrimaryButton component.
 *
 * @property {string} text The text to display on the button.
 * @property {"button" | "submit" | "reset"} buttonType The type of button.
 * @property {string} [className] The class name for the button.
 * @property {() => void} onClick The function to call when the button is clicked.
 * @property {boolean} [disabled] A boolean that determines if the button is
 * disabled.
 */
interface PrimaryButtonProps {
  text: string;
  buttonType: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
