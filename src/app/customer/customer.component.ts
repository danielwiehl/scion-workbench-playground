import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkbenchView} from '@scion/workbench';
import {Customer, CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {

  public customer: Customer;

  constructor(private route: ActivatedRoute,
              customerService: CustomerService,
              view: WorkbenchView) {
    route.paramMap.subscribe(params => {
      this.customer = customerService.findCustomer(params.get('id'));
      view.title = 'Customer';
      view.heading = `${this.customer.firstname} ${this.customer.lastname}`;
    });
  }

}
