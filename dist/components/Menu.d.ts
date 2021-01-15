import React, { ReactNode } from 'react';
import { PortalProps } from './Portal';
import { MenuId, MenuAnimation } from '../types';
export interface MenuProps extends PortalProps, Omit<React.HTMLAttributes<HTMLElement>, 'id'> {
    /**
     * Unique id to identify the menu. Use to Trigger the corresponding menu
     */
    id: MenuId;
    /**
     * Any valid node that can be rendered
     */
    children: ReactNode;
    /**
     * Theme is appended to `react-contexify__theme--${given theme}`.
     *
     * Built-in theme are `light` and `dark`
     */
    theme?: string;
    /**
     * Animation is appended to
     * - `.react-contexify__will-enter--${given animation}`
     * - `.react-contexify__will-leave--${given animation}`
     *
     * - To disable all animations you can pass `false`
     * - To disable only the enter or the exit animation you can provide an object `{enter: false, exit: 'exitAnimation'}`
     *
     * - default is set to `scale`
     *
     * To use the built-in animation a helper in available
     * `import { animation } from 'react-contexify`
     *
     * animation.fade
     */
    animation?: MenuAnimation;
    /**
     * Invoked after the menu is visible.
     */
    onShown?: () => void;
    /**
     * Invoked after the menu has been hidden.
     */
    onHidden?: () => void;
}
export declare const Menu: React.FC<MenuProps>;
