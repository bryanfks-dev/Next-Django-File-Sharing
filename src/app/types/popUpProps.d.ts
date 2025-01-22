/**
 * PopUpProps is an interface that defines the properties of the PopUp component
 * that will be used to display a pop-up menu when the user clicks on the menu
 * icon.
 *
 * @property {() => void} onClose - a function that closes the menu pop-up
 */
interface PopUpProps {
  onClose: () => void;
}
