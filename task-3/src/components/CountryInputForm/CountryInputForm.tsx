import React from "react";
import { CountryFormProps } from "Entity";
import CountryInput from "./CountryInput";
import FetchButton from "./FetchButton";
import ResetButton from "./ResetButton";
import { Column, Row } from "Grid";

const CountryInputForm: React.FC<CountryFormProps> = ({
    country,
    setCountry,
    updateUrl,
    setData,
}) => {
    return (
        <Row justifyContent="space-between" alignItems="flex-end">
            <Column columnWidth={0.45}>
                <CountryInput country={country} setCountry={setCountry} />
            </Column>
            <Column columnWidth={0.24}>
                <FetchButton country={country} updateUrl={updateUrl} />
            </Column>
            <Column columnWidth={0.24}>
                <ResetButton setCountry={setCountry} setData={setData} />
            </Column>
        </Row>
    );
};

export default CountryInputForm;
