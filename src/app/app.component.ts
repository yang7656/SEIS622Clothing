import { Component, OnInit } from '@angular/core';
import { Router, Event, RoutesRecognized, RouteConfigLoadStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = "SEIS-622 Northern Streetwear - From the Woods to the Pavement";

  constructor(private router: Router, private auth: AuthService) {}
  
  ngOnInit() {
    this.auth.logout();
  }

}
