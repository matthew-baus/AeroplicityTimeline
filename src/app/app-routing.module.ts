import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './Home/Home.component';
import {TimelineComponent} from './Timeline/Timeline.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path:"Timeline",
    component: TimelineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
