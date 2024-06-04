import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../types/housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './housing-location.component.css',
  templateUrl: './housing-location.component.html',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
