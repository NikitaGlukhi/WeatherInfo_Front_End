import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private router: Router, private route: ActivatedRoute) { 
  setTheme('bs4');
 }

  title = 'app';
}
