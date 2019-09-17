export interface TableConfig {
    fields: Array<TableConfigField>;
    data?: Array<any>;
    objectKey?: string;
}

export interface TableConfigField {
    name: string;
    objectKey: string;
    classNames?: string;
    rowClass?: string;
    columnClass?: string;
}