/**
 * Type definitions for the Polaris Button component
 * Based on the official Shopify Polaris Web Components API
 */

export type ButtonVariant = 'auto' | 'primary' | 'secondary' | 'tertiary';
export type ButtonTone = 'auto' | 'neutral' | 'critical';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonTarget = 'auto' | '_blank' | '_self' | '_parent' | '_top' | string;
export type ButtonCommand = '--auto' | '--show' | '--hide' | '--toggle';

/**
 * Available icon types for Polaris buttons
 * Note: This is a subset - add more as needed from the Polaris icon library
 */
export type ButtonIcon =
  | ''
  | 'plus'
  | 'replace'
  | 'search'
  | 'split'
  | 'link'
  | 'edit'
  | 'product'
  | 'variant'
  | 'collection'
  | 'select'
  | 'info'
  | 'incomplete'
  | 'complete'
  | 'color'
  | 'money'
  | 'adjust'
  | 'affiliate'
  | 'airplane'
  | 'alert-bubble'
  | 'alert-circle'
  | 'alert-diamond'
  | 'alert-location'
  | 'alert-octagon'
  | 'alert-octagon-filled'
  | 'alert-triangle'
  | 'duplicate'
  | 'view'
  | 'menu-horizontal'
  | 'order';

/**
 * Props for the Button component
 */
export interface ButtonProps {
  /**
   * A label that describes the purpose or contents of the Button.
   * It will be read to users using assistive technologies such as screen readers.
   *
   * Use this when using only an icon or the Button text is not enough context
   * for users using assistive technologies.
   */
  accessibilityLabel?: string;

  /**
   * Sets the action the command should take when this clickable is activated.
   *
   * - `--auto`: a default action for the target component.
   * - `--show`: shows the target component.
   * - `--hide`: hides the target component.
   * - `--toggle`: toggles the target component.
   *
   * @default '--auto'
   */
  command?: ButtonCommand;

  /**
   * Sets the element the commandFor should act on when this clickable is activated.
   */
  commandFor?: string;

  /**
   * Disables the Button meaning it cannot be clicked or receive focus.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Causes the browser to treat the linked URL as a download with the string being the file name.
   * Download only works for same-origin URLs or the `blob:` and `data:` schemes.
   */
  download?: string;

  /**
   * The URL to link to.
   *
   * - If set, it will navigate to the location specified by `href` after executing the `click` event.
   * - If a `commandFor` is set, the `command` will be executed instead of the navigation.
   */
  href?: string;

  /**
   * The type of icon to be displayed in the Button.
   */
  icon?: ButtonIcon;

  /**
   * Sets the element the interestFor should act on when this clickable is activated.
   */
  interestFor?: string;

  /**
   * Replaces content with a loading indicator while a background action is being performed.
   * This also disables the Button.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Specifies where to display the linked URL.
   *
   * @default 'auto'
   */
  target?: ButtonTarget;

  /**
   * Sets the tone of the Button based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ButtonTone;

  /**
   * The behavior of the Button.
   *
   * - `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
   * - `button`: Used to indicate the component acts as a button, meaning it has no default action.
   * - `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form.
   *
   * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
   *
   * @default 'button'
   */
  type?: ButtonType;

  /**
   * Changes the visual appearance of the Button.
   *
   * @default 'auto' - the variant is automatically determined by the Button's context
   */
  variant?: ButtonVariant;

  /**
   * The content of the Button.
   */
  children?: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: React.CSSProperties;

  /**
   * Event handler for blur events
   */
  onBlur?: (event: Event) => void;

  /**
   * Event handler for click events
   */
  onClick?: (event: Event) => void;

  /**
   * Event handler for focus events
   */
  onFocus?: (event: Event) => void;
}
