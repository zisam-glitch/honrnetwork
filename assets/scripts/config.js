/**
 * > When using the esBuild API, all `process.env.NODE_ENV` expressions
 * > are automatically defined to `"production"` if all minification
 * > options are enabled and `"development"` otherwise. This only happens
 * > if `process`, `process.env`, and `process.env.NODE_ENV` are not already
 * > defined. This substitution is necessary to avoid code crashing instantly
 * > (since `process` is a Node API, not a web API).
 * > — https://esbuild.github.io/api/#platform
 */

const NODE_ENV = process.env.NODE_ENV
const IS_MOBILE = window.matchMedia('(any-pointer:coarse)').matches

// Main environment variables
const ENV = Object.freeze({
    // Node environment
    NAME: NODE_ENV,
    IS_PROD: NODE_ENV === 'production',
    IS_DEV: NODE_ENV === 'development',

    // Device
    IS_MOBILE,
    IS_DESKTOP: !IS_MOBILE,
})

// Main CSS classes used within the project
const CSS_CLASS = Object.freeze({
    LOADING: 'is-loading',
    LOADED: 'is-loaded',
    FIRST_LOADED: 'is-first-loaded',
    READY: 'is-ready',
    NO_JS: 'has-no-js',
    MODAL_OPEN: 'has-modal-open',
    FONTS_LOADED: 'fonts-loaded',
    LAZY_CONTAINER: 'c-lazy',
    LAZY_LOADED: '-lazy-loaded',
    // ...
})

// Custom js events
const CUSTOM_EVENT = Object.freeze({
    RESIZE_END: 'loco.resizeEnd',
    FORM_RESET: 'loco.formReset',
    VISIT_START: 'loco.visitStart',
    VISIT_END: 'loco.visitEnd',
    // ...
})

// Fonts parameters
const FONT = Object.freeze({
    EAGER: [{
            family: 'Labil Grotesk',
            style: 'normal',
            weight: 400
        },
        {
            family: 'Labil Grotesk',
            style: 'normal',
            weight: 500
        },
        {
            family: 'Labil Grotesk',
            style: 'normal',
            weight: 700
        },
        {
            family: 'Manuka',
            style: 'normal',
            weight: 700
        },
    ],
})

const BREAKPOINTS = Object.freeze({
    FROM_TINY: 500,
    TO_TINY: 499,
    FROM_SMALL: 700,
    TO_SMALL: 699,
    FROM_MEDIUM: 1000,
    TO_MEDIUM: 999,
    FROM_LARGE: 1200,
    TO_LARGE: 1199,
    FROM_BIG: 1400,
    TO_BIG: 1399,
    FROM_HUGE: 1600,
    TO_HUGE: 1599,
    FROM_ENORMOUS: 1800,
    TO_ENORMOUS: 1799,
    FROM_GIGANTIC: 2000,
    TO_GIGANTIC: 1999,
    FROM_COLOSSAL: 2400,
    TO_COLOSSAL: 2399
})

export {
    ENV,
    CSS_CLASS,
    CUSTOM_EVENT,
    FONT,
    BREAKPOINTS,
}