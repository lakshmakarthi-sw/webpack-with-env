import React, { useCallback, useState, useEffect, useMemo, Suspense, lazy, useId } from "react";
const TableComponent = lazy(() => import("./TableComponents"))

const countSet = new Set();

const DashboardComponent = () => {
    const [count, setCount] = useState(0);
    const [countM, setCountM] = useState(0);
    const useid = useId();

    const addCount = useCallback(() => {
        setCount(() => count + 1);
    }, [count]);

    const addCountM = useCallback(() => {
        setCountM(() => countM - 1);
    }, [countM]);

    useEffect(() => { console.log("Parent Component", useid)
    fetch(process.env.API_URL).then(e => console.log("result1", e)).catch(e => console.log("result", e))
    }, [count]);

    countSet.add(addCount);
    countSet.add(addCountM);

    const memorized = useMemo(() => <TableComponent />, [count]);

    return (
        <Suspense fallback={<>Loading</>}>
            {memorized}
            <div>
                Count - {count} :
            </div>
            <button onClick={() => addCount()}>Add</button>
            <button onClick={() => addCountM()}>Minus</button>
        </Suspense>
    );
}

export default DashboardComponent; 