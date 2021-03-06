import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { MapdataComponent } from './mapdata/mapdata.component';


const routes: Routes = [
  {path : '',  component : MapdataComponent},
  {path : 'about',  component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
