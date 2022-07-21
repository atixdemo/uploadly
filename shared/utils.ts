import Papa from "papaparse";
import { Cell } from "./types";

export type Validation = {
    valid: boolean
    message?: string;
};

export const validateCSV = (parsedData: any): Validation => {
    const columns = Object.keys(parsedData[0]);

    if (!columns || columns.length === 0) {
        return { valid: false, message: "CSV file has no columns." }
    }

    if (columns.length > 1) {
        return { valid: false, message: "CSV file has more than 1 column." }
    }

    if (columns[0].toLowerCase() !== "total") {
        return { valid: false, message: "CSV file column header is not Total or total." }
    }
    return { valid: true }
}

export const parseCSV = (file: any): unknown[] => {
    const parsedResult = Papa.parse(file, { header: true });
    return parsedResult?.data;
}

export const isCSVFile = (fileType: string): boolean => fileType === "text/csv";

export const sum = (cells: [Cell]): number => {
    return cells.reduce(function (acc, cell) {
        return Number(acc) + Number(cell.Total);
    }, 0);
};

export function generateUUID() { 
    // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}