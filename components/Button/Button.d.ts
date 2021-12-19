import React from "react";
import "./button.css";
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ primary, backgroundColor, size, onClick, label, }: ButtonProps) => JSX.Element;
export default Button;
