import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HousingLocation } from '../housinglocation';

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
    this.getHousing().subscribe(
      (data) => {
        this.housingLocation = data;
      },
      (error) => {
        console.log(`Deu ruim ${error}`);
      },
      () => {}
    );
  }

  public getHousingById(id: number): HousingLocation | undefined {
    return this.housingLocation.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
