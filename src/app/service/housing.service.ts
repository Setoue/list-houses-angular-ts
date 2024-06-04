import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HousingLocation } from '../types/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private SERVER_URL = 'http://localhost:3000';

  housingLocation: HousingLocation[] = [];

  constructor(private http: HttpClient) {}

  public getHousing(): Observable<HousingLocation[]> {
    const response = this.http.get<HousingLocation[]>(
      `${this.SERVER_URL}/housingLocationData`
    );
    return response;
  }

  public getListHousing(): void {
    this.getHousing().subscribe({
      next: (data) => {
        this.housingLocation = data;
      },
      error: (erro) => {
        alert('Deu ruim na requisição');
        console.log(`Deu ruim ${erro}`);
      },
    });
  }

  public getHousingById(id: number): HousingLocation | undefined {
    return this.housingLocation.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
