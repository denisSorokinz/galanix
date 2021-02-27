import React, { useEffect, useMemo } from "react";
import { FetchResultsProps } from "Entity";
import { fetchedData } from "Types";
import { useGrid } from "Hooks";
import { getIndexedTable } from "Utils";
import Table from "./Table";
import { Column, Row } from "Grid";
import { StyledSpan } from "Styled";
import colors from "Assets/colors";

const FetchResults: React.FC<FetchResultsProps> = ({
    data,
    isLoading,
    hasError,
    errorMessage,
}) => {
    let table = useMemo(() => useGrid(data), [data]);
    let indexedTable: fetchedData[] | null = null;
    let singleColumnWidth: number | null = null;
    if (data && table) {
        indexedTable = getIndexedTable(table);
        singleColumnWidth = 1 / (Object.keys(data[0]).length + 2);
    }

    return (
        <Row>
            <Column>
                {isLoading ? (
                    <StyledSpan>Loading...</StyledSpan>
                ) : hasError ? (
                    <StyledSpan color={colors.red}>{errorMessage}</StyledSpan>
                ) : indexedTable && singleColumnWidth ? (
                    <Table
                        table={indexedTable}
                        singleColumnWidth={singleColumnWidth}
                    />
                ) : (
                    <StyledSpan>No Data Fetched</StyledSpan>
                )}
            </Column>
        </Row>
    );
};

export default FetchResults;
