import { RefTrackerValue } from '../hooks';
/**
 * Used to control keyboard navigation
 */
export declare function createMenuController(): {
    init: (rootMenu: RefTrackerValue[]) => void;
    moveDown: () => void;
    moveUp: () => void;
    openSubmenu: () => boolean;
    closeSubmenu: () => void;
};
