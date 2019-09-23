import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  pet=null;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe((params:Params) => {
        this._httpService.getPet(params.id)
          .subscribe((data:any) => {
            this.pet = data.pet});
      })
  }
  handleCancel(){
    this._router.navigate(['/pets']);
  }
  handleSubmit(){
    this._httpService.updatePet(this.pet._id, {
      name: this.pet.name,
      type: this.pet.type,
      desc: this.pet.desc,
      skill1: this.pet.skill1,
      skill2: this.pet.skill2,
      skill3: this.pet.skill3
    })
      .subscribe((data:any) => {
        if(data.hasOwnProperty('errors')){
          this.errors = data.errors;
        }
        else{
          this._router.navigate(['/pets']);
        }
      })
  }

}
