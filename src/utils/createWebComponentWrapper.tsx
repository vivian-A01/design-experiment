import React, { useEffect, useRef, forwardRef } from 'react';

/**
 * Type for event listeners that can be attached to web components
 */
type EventListener = (event: Event) => void;

/**
 * Props that are common to all web components
 */
interface BaseWebComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Utility type to extract event names from props that start with 'on'
 * Note: Currently unused but kept for future event handler type inference
 */
// type EventHandlers<T> = {
//   [K in keyof T as K extends `on${infer E}` ? K : never]: T[K];
// };

/**
 * Creates a React wrapper component for a Polaris web component
 *
 * @param tagName - The web component tag name (e.g., 's-button')
 * @returns A React component that wraps the web component
 */
export function createWebComponentWrapper<
  Props extends Record<string, any> = Record<string, any>
>(tagName: string) {
  type ComponentProps = BaseWebComponentProps & Props;

  const Component = forwardRef<HTMLElement, ComponentProps>((props, ref) => {
    const { children, className, style, ...rest } = props;
    const elementRef = useRef<HTMLElement>(null);

    // Combine refs
    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(elementRef.current);
        } else {
          ref.current = elementRef.current;
        }
      }
    }, [ref]);

    // Set properties and event listeners on the web component
    useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      const eventListeners: Array<[string, EventListener]> = [];

      // Separate event handlers from regular props
      Object.entries(rest).forEach(([key, value]) => {
        if (key.startsWith('on') && typeof value === 'function') {
          // Convert React event handler to web component event listener
          const eventName = key.slice(2).toLowerCase();
          element.addEventListener(eventName, value as EventListener);
          eventListeners.push([eventName, value as EventListener]);
        } else if (value !== undefined && value !== null) {
          // Set as property on the element
          try {
            (element as any)[key] = value;
          } catch (error) {
            console.warn(`Failed to set property ${key} on ${tagName}:`, error);
          }
        }
      });

      // Cleanup event listeners
      return () => {
        eventListeners.forEach(([eventName, listener]) => {
          element.removeEventListener(eventName, listener);
        });
      };
    }, [rest]);

    return React.createElement(
      tagName,
      {
        ref: elementRef,
        className,
        style,
      },
      children
    );
  });

  Component.displayName = `WebComponent(${tagName})`;

  return Component;
}

/**
 * Hook to ensure Polaris web components are loaded
 */
export function usePolarisWebComponents() {
  useEffect(() => {
    // Polaris web components are automatically registered when imported
    // This hook can be used for any initialization needed
    if (typeof window !== 'undefined' && !customElements.get('s-button')) {
      console.warn(
        'Polaris web components not loaded. Make sure to import @shopify/polaris in your app.'
      );
    }
  }, []);
}
