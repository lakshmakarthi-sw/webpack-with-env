import { useEffect, useState } from "react";

const useCustom = () => {
    const [state, setState] = useState(0);

    useEffect((e) => {
        setState(e);
    }, [state])

    return state;
}

export default useCustom;