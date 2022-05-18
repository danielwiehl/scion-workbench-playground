import { Component } from '@angular/core';
import {WorkbenchService} from '@scion/workbench';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public viewCount$: Observable<number>;

  constructor(workbench: WorkbenchService) {
    this.viewCount$ = workbench.views$.pipe(map(views => views.length));
  }
}
