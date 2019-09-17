import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableConfig } from './components/table/table.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  tableConfig: TableConfig;
  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.form = this._formBuilder.group({
      student: []
    });

    this.tableConfig = {
      fields: [{
        name: 'Id',
        objectKey: 'id'
      }, {
        name: 'Name',
        objectKey: 'name'

      }],
      data: [{
        id: 1,
        name: 'Anna'
      }, {
        id: 2,
        name: 'Julie'
      }, {
        id: 3,
        name: 'Lillian'
      }, {
        id: 4,
        name: 'Norma'
      }, {
        id: 5,
        name: 'Ralph'
      }]
    }
  }

  /* setValues(): void {
    console.log(this.form);
    this.form.patchValue({
      student: {
        student: 'Two',
        college: 'College GTU Two',
        university: 'MJP GTU Two',
        code: '600'
      }
    })
  } */
}
