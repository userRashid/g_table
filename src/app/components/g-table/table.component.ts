import { Component, Input } from '@angular/core';
import { TableConfigField } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})

export class GtTableComponent {
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
      console.warn('Error' + COLUMNS_WITH_CLASS_NAMES[0].objectKey);
    }
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  @Input()
  set gtData(initialData: Array<any>) {
    const data = this.cloneDeep(initialData);
    this._gtData = data;
  }

  // tslint:disable-next-line: variable-name
  private _gtFields: Array<TableConfigField> = [];
  // tslint:disable-next-line: variable-name
  private _gtData: Array<any>;

  constructor() { }

  private cloneDeep(o: any) {
    return JSON.parse(JSON.stringify(o));
  };
}
