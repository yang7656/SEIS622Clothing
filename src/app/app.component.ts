import { Component } from '@angular/core';
import { IMenuItem } from './models/menu-item';
import { TopMenuService } from './shared/top-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SEIS622Clothing';
}
