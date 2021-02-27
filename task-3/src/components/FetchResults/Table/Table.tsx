import React from "react";
import colors from "Assets/colors";
import { fetchedData } from "Types";
import { Column, Row } from "Grid";
import { StyledSpan } from "Styled";
import { isUrlValid } from "Utils";

interface TableProps {
    table: fetchedData[];
    singleColumnWidth: number;
}

const Table: React.FC<TableProps> = ({ table, singleColumnWidth }) => {
    return (
        <>
            {table &&
                table.map((row, rowInd) => {
                    const isContentCentered = row.length == 1 ? "center" : null;
                    return (
                        <Row
                            key={row[0] && row[0].name}
                            justifyContent={isContentCentered}
                        >
                            {row.map((column, columnInd) =>
                                (() => {
                                    const columnContent = (rowInd == 0
                                        ? Object.keys(column)
                                        : Object.values(column))[columnInd];
                                    // display reference in <a>
                                    const references = Array.isArray(
                                        columnContent
                                    )
                                        ? columnContent
                                              .filter((item) =>
                                                  isUrlValid(item)
                                              )
                                              .map((reference) => (
                                                  <a href={reference}>
                                                      {reference}
                                                  </a>
                                              ))
                                        : null;
                                    return (
                                        <>
                                            <Column
                                                key={JSON.stringify(
                                                    columnContent
                                                )}
                                                columnWidth={singleColumnWidth!}
                                            >
                                                <StyledSpan
                                                    fontSize={"0.75rem"}
                                                    color={colors.black}
                                                >
                                                    {references
                                                        ? references.map(
                                                              (reference) =>
                                                                  reference
                                                          )
                                                        : columnContent}
                                                </StyledSpan>
                                            </Column>
                                            {/* copy, modify LocalStorageService, checked={LSService.isChecked(rowId)} on reset -> LSService.reset(), onchange -> LSService.toggleChecked(rowId) */}
                                            {/* {columnInd === row.length - 1 && <input type="checkbox" che />} */}
                                        </>
                                    );
                                })()
                            )}
                        </Row>
                    );
                })}
        </>
    );
};

export default Table;
