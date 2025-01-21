/**
 * TabProps is an interface that defines the properties of a tab.
 *
 * @param {string} text The text of the tab
 * @param {string} href The href of the tab
 * @param {React.ReactNode} icon The icon of the tab
 */
interface TabProps {
  text: string;
  href: string;
  icon?: React.ReactNode;
}
