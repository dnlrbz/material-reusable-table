import {Component, OnInit} from '@angular/core';
import {TableColumn} from "../table/TableColumn";
import {Customer} from "./customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  customersTableColumns: TableColumn[];

  constructor() {
  }

  ngOnInit(): void {
    this.customers = this.getCustomers();
    this.initColumns();
  }

  getCustomers(): Customer[] {
    return [
      {
        name: 'John',
        age: 30
      },
      {
        name: 'Maria',
        age: 25
      }
    ];
  }

  initColumns(): void {
    this.customersTableColumns = [
      {
        name: 'customers name',
        dataKey: 'name'
      },
      {
        name: 'customers age',
        dataKey: 'age'
      }
    ];
  }

}
