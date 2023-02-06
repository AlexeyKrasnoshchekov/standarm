import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    appearance: 'primary' | 'ghost',
    icon?: 'water' | 'klin' | 'shiber' | 'disk' | 'kran' | 'arma' | 'none',
    size?: 'normal' | 'big' | 'middle'
}