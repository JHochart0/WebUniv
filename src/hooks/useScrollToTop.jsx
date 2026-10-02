import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// this component is used to scroll to the top of the page each time we change the route
function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default useScrollToTop;
