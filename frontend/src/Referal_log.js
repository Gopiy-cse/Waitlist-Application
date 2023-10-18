import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

function Referal_log() {
    const navigate = useNavigate();
    const myparam = useLocation().search;
    
    // Extract the "refid" from the query parameters
    const refid = new URLSearchParams(myparam).get("refid");

    useEffect(() => {
        // Redirect to the homepage ("/") with the "ref_id" in the state
        navigate('/', { state: { ref_id: refid } });
    }, [navigate, refid]);
}

export default Referal_log;
