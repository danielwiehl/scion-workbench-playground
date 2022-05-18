import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WorkbenchModule} from '@scion/workbench';
import {DesktopComponent} from './desktop/desktop.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: DesktopComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
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
