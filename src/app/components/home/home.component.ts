import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../housinglocation';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  housingLocation: HousingLocation[] = [];

  constructor(private housingService: ProductService) {
    this.getListHousing();
  }

  ngOnInit(): void {}

  getListHousing(): void {
    this.housingService.getHousing().subscribe((data) => {
      this.housingLocation = data;
    });
  }
}
