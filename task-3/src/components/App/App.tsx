import React, { useEffect, useState } from "react";
import { CountryFormProps, FetchResultsProps } from "Entity";
import { useFetch, useGrid } from "Hooks";
import { CountryInputForm, FetchResults } from "Components";

const App: React.FC = () => {
    const [country, setCountry] = useState("");
    const {
        data,
        setData,
        isLoading,
        hasError,
        errorMessage,
        updateUrl,
    } = useFetch("");

    const countryFormProps: CountryFormProps = {
        country,
        setCountry,
        updateUrl,
        setData,
    };

    const fetchResultsProps: FetchResultsProps = {
        data,
        isLoading,
        hasError,
        errorMessage,
    };

    return (
        <>
            <CountryInputForm {...countryFormProps} />
            <FetchResults {...fetchResultsProps} />
        </>
    );
};

export default App;
