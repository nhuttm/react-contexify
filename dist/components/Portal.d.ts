import React from 'react';
export interface PortalProps {
    /**
     * HTML node where to mount the context menu.
     *
     * In SSR mode, prefer the callback form to be sure that document is only
     * accessed on the client. `e.g. () => document.querySelector('#element')`
     *
     * `default: document.body`
     */
    mountNode?: Element | (() => Element);
}
export declare const Portal: React.FC<PortalProps>;
