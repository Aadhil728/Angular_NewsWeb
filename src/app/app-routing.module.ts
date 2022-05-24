import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:"", component:TopheadingComponent},
  {path:"tech", component:TechnologyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
