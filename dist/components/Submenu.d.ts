import React, { ReactNode } from 'react';
import { InternalProps, BooleanPredicate } from '../types';
export interface SubMenuProps extends InternalProps, Omit<React.HTMLAttributes<HTMLElement>, 'hidden'> {
    /**
     * Any valid node that can be rendered
     */
    label: ReactNode;
    /**
     * Any valid node that can be rendered
     */
    children: ReactNode;
    /**
     * Render a custom arrow
     */
    arrow?: ReactNode;
    /**
     * Disable the `Submenu`. If a function is used, a boolean must be returned
     */
    disabled?: BooleanPredicate;
    /**
     * Hide the `Submenu` and his children. If a function is used, a boolean must be returned
     */
    hidden?: BooleanPredicate;
}
export declare const Submenu: React.FC<SubMenuProps>;