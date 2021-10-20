import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'


@NgModule({
  imports: [ ],
  exports: [
    MatCardModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
