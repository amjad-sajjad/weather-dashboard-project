import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const timoutIdRef = useRef(null);

    // cleaning functionality for frequently components rerender:
    useEffect(() => {
        return () => {
            if (timoutIdRef.current) {
                clearTimeout(timoutIdRef.current)
            }
        }
    }, []);

    const debounceCallback = (...arg) => {
        if (timoutIdRef.current) {
            clearTimeout(timoutIdRef.current)
        }
        timoutIdRef.current = setTimeout(() => {
            callback(...arg)
        }, delay)
    }
    return debounceCallback;

};

export default useDebounce;