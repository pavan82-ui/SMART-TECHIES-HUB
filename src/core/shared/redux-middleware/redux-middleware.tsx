import type { Middleware } from "redux";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
    console.log("middleware action", action , store.getState());
    return next(action);
}

export default loggerMiddleware;