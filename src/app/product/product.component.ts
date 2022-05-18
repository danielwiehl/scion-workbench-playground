import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService} from '../product.service';
import {WorkbenchView} from '@scion/workbench';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  public product: Product;

  constructor(private route: ActivatedRoute,
              productService: ProductService,
              view: WorkbenchView) {
    route.paramMap.subscribe(params => {
      this.product = productService.findProduct(params.get('id'));
      view.title = 'Product';
      view.heading = this.product.name;
    });
  }
}
