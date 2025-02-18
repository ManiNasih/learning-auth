/*
 * An array of routes that are accesible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/*
 * An array of routes that are used for authentication
 * These routes redirect the user to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/*
 * The prefix for api authentication routes
 * Routes that start with this prefix are used for authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/*
 * The default redirect path after authentication
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
