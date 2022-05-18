import {Component} from '@angular/core';
import {WorkbenchView} from '@scion/workbench';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {

  constructor(view: WorkbenchView, public customerService: CustomerService) {
    view.title = "Customers";
  }
}
