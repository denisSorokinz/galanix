import { fetchedData } from "Types";

const useGrid = (data: fetchedData | null): Array<fetchedData> | null => {
    if (!data || data.length == 0) return null;
    let rows: Array<fetchedData> = [[]];
    let currentRow = 0;
    let columnWidthsSum = 0;
    const singleColumnWidth = 1 / (Object.keys(data[0]).length + 1);
    data.map((_, index) => {
        columnWidthsSum += singleColumnWidth;
        if (columnWidthsSum == 1) {
            rows[currentRow].push(data[index]);
            if (!(index == data.length - 1)) rows.push([]);
            currentRow++;
            columnWidthsSum = 0;
        } else if (columnWidthsSum > 1) {
            currentRow++;
            rows.push([]);
            rows[currentRow].push(data[index]);
            columnWidthsSum = singleColumnWidth;
        } else {
            rows[currentRow].push(data[index]);
        }
    });
    return rows;
};

export default useGrid;
