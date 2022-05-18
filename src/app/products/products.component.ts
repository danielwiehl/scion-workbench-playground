import {Component} from '@angular/core';
import {WorkbenchView} from '@scion/workbench';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  constructor(view: WorkbenchView, public productService: ProductService) {
    view.title = "Products";
  }
}
