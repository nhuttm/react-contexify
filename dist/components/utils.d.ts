import { ReactNode, ReactElement } from 'react';
import { BooleanPredicate, PredicateParams, MenuAnimation, TriggerEvent } from '../types';
export declare function isFn(v: any): v is Function;
export declare function isStr(v: any): v is String;
export declare function isTouchEvent(e: TriggerEvent): e is TouchEvent;
export declare function cloneItems(children: ReactNode, props: {
    triggerEvent: TriggerEvent;
    propsFromTrigger?: object;
}): ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[];
export declare function getMousePosition(e: TriggerEvent): {
    x: number;
    y: number;
};
export declare function getPredicateValue(predicate: BooleanPredicate, payload: PredicateParams): boolean;
export declare function hasExitAnimation(animation: MenuAnimation): boolean;
export declare const canUseDOM: boolean;