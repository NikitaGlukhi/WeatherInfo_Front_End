import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  weathers1: any = {};
  weathers2: any = {};

  lat: number;
  lng: number;

  constructor(private weather: AppService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.current();
        this.forecastcoords();  
      });
    } else {
      this.lat = 51.5073;
      this.lng = -0.1277
    }
  }

  current() {
    this.weather.getCurrent(this.lat, this.lng)
    .subscribe(res => {
      this.weathers1 = res;
    }, err => {
      console.error(err);
    });
  }

  forecastcoords() {
    this.weather.getForecastCoords(this.lat, this.lng)
    .subscribe(res => {
      this.weathers2 = res;
    }, err => {
      console.error(err);
    })
  } 
}
