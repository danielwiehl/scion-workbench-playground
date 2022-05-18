import {Injectable} from '@angular/core';
import customers from './customer.data.json';

@Injectable({providedIn: 'root'})
export class CustomerService {

  public customers: Customer[] = customers.map(customer => ({...customer, products: [randomProductId(), randomProductId(), randomProductId()]}));

  public findCustomer(id: string): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }
}

function randomProductId(): string {
  return `${Math.ceil(Math.random() * 19)}`;
}

export interface Customer {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  products: string[]
}
