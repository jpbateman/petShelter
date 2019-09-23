import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';


const routes: Routes = [
  {
    path: 'pets/new',
    component: NewPetComponent
  },
  {
    path: 'pets/:id/edit',
    component: EditPetComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'pets',
    component: AllPetsComponent
  },
  {
    path: 'pets/:id',
    component: PetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
