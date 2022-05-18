import {Injectable} from '@angular/core';
import products from './product.data.json';

@Injectable({providedIn: 'root'})
export class ProductService {

  public products: Product[] = products;

  public findProduct(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}

export interface Product {
  id: string;
  name: string;
  price: number;
}
