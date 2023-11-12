import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
