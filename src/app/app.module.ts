import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WB_VIEW_TITLE_PARAM, WorkbenchModule} from '@scion/workbench';
import {DesktopComponent} from './desktop/desktop.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPipe} from './products.pipe';

const routes: Routes = [
  {path: '', component: DesktopComponent},
  {path: 'desktop', component: DesktopComponent, data: {[WB_VIEW_TITLE_PARAM]: 'New Tab'}},
  {
    path: 'products', children: [
      {path: '', component: ProductsComponent},
      {path: ':id', component: ProductComponent},
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    ProductsComponent,
    ProductComponent,
    ProductsPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserAnimationsModule,
    WorkbenchModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
