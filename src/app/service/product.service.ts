import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HousingLocation } from '../housinglocation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getHousing(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(
      `${this.SERVER_URL}/housingLocationData`
    );
  }
}
