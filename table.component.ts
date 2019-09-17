import { Component, Input } from "@angular/core";
import { TableConfig, TableConfigField } from './table.interface';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})

export class Table {
    get gtData(): Array<any> {
        return this._gtData;
    }
    get gtFields(): Array<TableConfigField> {
        return this._gtFields;
    }
    @Input()
    set gtFields(value: Array<TableConfigField>) {
        this._gtFields = value;
        const COLUMNS_WITH_CLASS_NAMES = this._gtFields.map(column => column).filter(column => column.classNames);
        if (COLUMNS_WITH_CLASS_NAMES.length > 0) {
            console.warn(
                'Field setting "classNames" have been deprecated in favor for "columnClass" and will be removed in the future, please update field settings for column with object key: ' +
                COLUMNS_WITH_CLASS_NAMES[0].objectKey
            );
        }
    }

    @Input()
    set gtData(initialData: Array<any>) {
        const data = this.cloneDeep(initialData);
        this._gtData = data;
    }

    private _gtFields: Array<TableConfigField> = [];
    private _gtData: Array<any>;

    constructor() { }

    private cloneDeep = function (o: any) {
        return JSON.parse(JSON.stringify(o));
    };
}