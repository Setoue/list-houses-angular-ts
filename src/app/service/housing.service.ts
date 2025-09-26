import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HousingLocation } from '../types/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private SERVER_URL = 'http://localhost:3000';

  housingLocation: HousingLocation[] = [];

  constructor(private http: HttpClient) {}

 public getHousing(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(
      `${this.SERVER_URL}/housingLocationData`
    ).pipe(
      tap((data) => (this.housingLocation = data))
    );
  }

  public getListHousing(): void {
    this.getHousing().subscribe({
      next: (data) => {
        this.housingLocation = data;
      },
      error: (erro) => {
        alert(`Request failed - ${erro}`);
      },
    });
  }

  public getHousingById(id: number): HousingLocation | undefined {
    return this.housingLocation.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  public getHousingByCity(name: string): HousingLocation[] {
    return this.housingLocation.filter(
      (house) => house.city.toLowerCase().includes(name.toLocaleLowerCase())
  );
}
}
