export interface MiddlewareError {
    [key: string]: {
        [type: string]: string;
    } | undefined
}