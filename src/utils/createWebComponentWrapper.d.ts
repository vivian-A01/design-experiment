import { default as React } from '../../node_modules/react';

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
/**
 * Creates a React wrapper component for a Polaris web component
 *
 * @param tagName - The web component tag name (e.g., 's-button')
 * @returns A React component that wraps the web component
 */
export declare function createWebComponentWrapper<Props extends Record<string, any> = Record<string, any>>(tagName: string): React.ForwardRefExoticComponent<React.PropsWithoutRef<BaseWebComponentProps & Props> & React.RefAttributes<HTMLElement>>;
/**
 * Hook to ensure Polaris web components are loaded
 */
export declare function usePolarisWebComponents(): void;
export {};
//# sourceMappingURL=createWebComponentWrapper.d.ts.map