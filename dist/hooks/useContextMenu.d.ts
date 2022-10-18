import { ContextMenuParams, TriggerEvent } from '../types';
export declare type UseContextMenuProps = Partial<Pick<ContextMenuParams, 'id' | 'props'>>;
export declare function useContextMenu(props?: UseContextMenuProps): {
    show(event: TriggerEvent, params?: Pick<ContextMenuParams, "id" | "props" | "position"> | undefined): void;
    hideAll(): void;
};