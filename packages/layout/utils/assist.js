export const dimensionMap = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
};
const isClient = typeof window !== 'undefined'
export function setMatchMedia () {
    if (!isClient) return;
    const matchMediaPolyfill = mediaQuery => {
        return {
            media: mediaQuery,
            matches: false,
            on() {},
            off() {},
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}