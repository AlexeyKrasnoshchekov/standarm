import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    appearance: 'primary' | 'ghost',
    icon?: 'water' | 'klin' | 'shiber' | 'disk' | 'kran' | 'arma' | 'none'
}