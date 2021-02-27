import React from "react";
import { FluidRoundedButton } from "Styled";
import { fetchedData } from "Types";

interface ResetButtonProps {
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    setData: React.Dispatch<React.SetStateAction<fetchedData | null>>;
}

const FetchButton: React.FC<ResetButtonProps> = ({ setCountry, setData }) => {
    function handleButtonClick() {
        setCountry("");
        setData(null);
    }

    return (
        <FluidRoundedButton onClick={handleButtonClick}>
            Reset
        </FluidRoundedButton>
    );
};

export default FetchButton;
