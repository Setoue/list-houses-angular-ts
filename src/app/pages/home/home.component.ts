import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
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
    // this.housingService.getHousingById();
  }
}
