import { Component, OnInit } from '@angular/core';
import { Router, Event, RoutesRecognized, RouteConfigLoadStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
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

    this.checkIfLoggedIn();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof RoutesRecognized) {
        //console.log('RoutesRecognized:', event);
      }

      if (event instanceof RouteConfigLoadStart) {
        //console.log('RouteConfigLoadStart:', event);
      }
    });

  }

  checkIfLoggedIn() {
    this.auth.isLoggedIn().subscribe({
      next: (isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['public']);
        }
      }
    });
  }

}
