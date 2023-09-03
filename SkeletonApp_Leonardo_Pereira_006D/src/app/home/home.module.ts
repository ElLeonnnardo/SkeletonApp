import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import {MatNativeDateModule} from '@angular/material/core' ;
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
export class TuComponenteModule {}



