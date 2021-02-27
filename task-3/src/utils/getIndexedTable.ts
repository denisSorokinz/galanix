import { fetchedData } from "Types";

const getIndexedTable = (table: Array<fetchedData>): Array<fetchedData> => {
    const indexedTable = table.map((row, rowInd) =>
        row.map((column) => {
            return { tableIndex: rowInd, ...column };
        })
    );
    return indexedTable;
};

export default getIndexedTable;
