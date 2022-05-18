import {Pipe, PipeTransform} from '@angular/core';
import {Product, ProductService} from './product.service';

@Pipe({name: 'appProducts'})
export class ProductsPipe implements PipeTransform {

  constructor(private productService: ProductService) {
  }

  public transform(productIds: string[]): Product[] {
    return productIds.map(productId => this.productService.findProduct(productId));
  }
}
