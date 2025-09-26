import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HousingService } from '../../service/housing.service';
import { HousingLocation } from '../../types/housinglocation';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form!: FormGroup
  @Output() houseChange = new EventEmitter<HousingLocation[]>();

  constructor(private service: HousingService){
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required])
    })
  }

    submit(){
      if(this.form.valid){
        const houses = this.service.getHousingByCity(this.form.value.name);
        this.houseChange.emit(houses);
        this.form.reset()
      }
  }

}
