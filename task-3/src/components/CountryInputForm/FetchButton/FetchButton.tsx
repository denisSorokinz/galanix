import React from "react";
import { API_ENDPOINTS } from "Constants";
import { generateQueryString } from "Utils";
import { FluidRoundedButton } from "Styled";

interface FetchButtonProps {
    country: string;
    updateUrl: React.Dispatch<React.SetStateAction<string>>;
}

const FetchButton: React.FC<FetchButtonProps> = ({ country, updateUrl }) => {
    function handleButtonClick() {
        // consts -> API Endpoint
        const apiEndpoint = API_ENDPOINTS.SEARCH;
        const queryString = generateQueryString(apiEndpoint, { country });
        if (queryString && country.length > 0) updateUrl(queryString);
    }

    return (
        <FluidRoundedButton type="submit" onClick={handleButtonClick}>
            Fetch
        </FluidRoundedButton>
    );
};

export default FetchButton;
