import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop — mounts inside <Router>, listens for pathname changes,
 * and scrolls the window to (0, 0) on every navigation.
 * Render it once, anywhere inside <BrowserRouter>.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
