import { Component } from '@angular/core';
import { IMenuItem } from './models/IMenuItem';
import { TopMenuService } from './shared/top-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "SEIS-622 Northern Streetwear - From the Woods to the Pavement";
}
