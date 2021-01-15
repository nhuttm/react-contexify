export declare type EventType = string | number | symbol;
export declare type Handler<T = any> = (args: T) => void;
export interface EventManager<E = EventType> {
    on<T = any>(event: E, handler: Handler<T>): EventManager<E>;
    off<T = any>(event: E, handler?: Handler<T>): EventManager<E>;
    emit<T = any>(event: E, args?: T): EventManager<E>;
}
export declare const eventManager: EventManager<string | number | symbol>;
