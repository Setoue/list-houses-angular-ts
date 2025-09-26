import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
import { HousingService } from '../../service/housing.service';
import { FormComponent } from '../../components/form/form.component';
import { HousingLocation } from '../../types/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  housingService: HousingService = inject(HousingService);
  houseListLocation: HousingLocation[] = [];

  ngOnInit(): void {
    this.housingService.getHousing().subscribe({
      next: (data: HousingLocation[]) => {
        this.houseListLocation = data;
      },
      error: () => alert('Request failed'),
    });
  }

  onHouseChange(houses: HousingLocation[]) {
    if (houses.length === 0) {
      this.houseListLocation = this.housingService.housingLocation;
    } else {
      this.houseListLocation = houses;
    }
  }
}
