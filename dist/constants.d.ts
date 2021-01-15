export declare const enum STYLE {
    menu = "react-contexify",
    submenu = "react-contexify react-contexify__submenu",
    submenuArrow = "react-contexify__submenu-arrow",
    submenuOpen = "react-contexify__submenu--is-open",
    separator = "react-contexify__separator",
    item = "react-contexify__item",
    itemDisabled = "react-contexify__item--disabled",
    itemContent = "react-contexify__item__content",
    theme = "react-contexify__theme--",
    animationWillEnter = "react-contexify__will-enter--",
    animationWillLeave = "react-contexify__will-leave--"
}
export declare const enum EVENT {
    HIDE_ALL = 0
}
export declare const theme: {
    light: string;
    dark: string;
};
export declare const animation: {
    fade: string;
    flip: string;
    scale: string;
    slide: string;
};
export declare const NOOP: () => void;
