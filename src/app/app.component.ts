import { Component } from '@angular/core';
import { TableConfig } from './components/g-table/table.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableConfig: TableConfig;
  constructor() {
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
    };
  }
}
