import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../housinglocation';
import { HousingService } from '../../service/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  housingService: HousingService = inject(HousingService);

  ngOnInit(): void {}
  constructor() {
    this.housingService.getListHousing();
  }

  // public getListHousing(): void {
  //   this.housingService.getHousing().subscribe(
  //     (data) => {
  //       this.housingLocation = data;
  //     },
  //     (error) => {
  //       console.log(`Deu ruim ${error}`);
  //     },
  //     () => {}
  //   );
  // }

  // public getHousingById(id: number): HousingLocation | undefined {
  //   return this.housingLocation.find(
  //     (housingLocation) => housingLocation.id === id
  //   );
  // }
}
