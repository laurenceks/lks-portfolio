const updateSlug = (path: string, state: { slug?: string } = {}) => {
    if (window.location.pathname !== path) {
        window.history.pushState(state, "", path);
    }
};
export default updateSlug;
