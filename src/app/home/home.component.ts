import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assests/images/tutorials/common';
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'test home',
    city: 'test city',
    state: 'st',
    photo: '${this.baseUrl}/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
    
  };
}
