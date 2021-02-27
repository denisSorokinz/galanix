import React from "react";
import { StyledInput, StyledLabel } from "Styled";

interface CountryInputProps {
    country: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const CountryInput: React.FC<CountryInputProps> = ({ country, setCountry }) => {
    function handleInputChange(ev: React.FormEvent<HTMLInputElement>) {
        const newCountry = ev.currentTarget.value;
        setCountry(newCountry);
    }

    return (
        <>
            <StyledLabel htmlFor="country">Enter Country</StyledLabel>
            <StyledInput
                type="text"
                name="country"
                id="country"
                value={country}
                onChange={(ev) => handleInputChange(ev)}
            />
        </>
    );
};

export default CountryInput;
