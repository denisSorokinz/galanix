import { useState, useEffect } from "react";
import { fetchedData } from "Types";
import { isUrlValid } from "Utils";

const useFetch = (initialUrl: string) => {
    const [url, updateUrl] = useState(initialUrl);
    const [data, setData] = useState<fetchedData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            if (!isUrlValid(url)) return null;
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (response.ok) {
                    setData(result);
                } else {
                    setHasError(true);
                    setErrorMessage(result);
                }
            } catch (err) {
                setHasError(true);
                setErrorMessage(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return {
        data,
        setData,
        isLoading,
        hasError,
        errorMessage,
        updateUrl,
    };
};
export default useFetch;
