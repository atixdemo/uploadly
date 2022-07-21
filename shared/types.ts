export type Cell = {
    Total: string;
};

export type Image = {
    name: string;
};

export type Sheet = {
    name: string;
    fileContent: [Cell]
};

// export type fileTypeKey = 'sheets' | 'images'

export enum FileTypeKey {
    sheets = 'sheets',
    images = 'images',
}