/**
 * MenuPopUpProps is an interface for the props of the MenuPopUp component.
 *
 * @extends {PopUpProps} - the properties of the PopUp component
 *
 * @see {@link PopUpProps} for more information
 *
 * @property {() => void} onClose - a function that closes the menu pop-up
 * @property {() => void} showUploadFilePopUpOnClick - a function that will be
 * called when the user clicks on the upload file menu item.
 */
interface MenuPopUpProps extends PopUpProps {
  showUploadFilePopUpOnClick: () => void;
}
