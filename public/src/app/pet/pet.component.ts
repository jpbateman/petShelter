import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet = null;
  errors = [];
  liked = false;
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
  handleAdopt(id){
    this._httpService.deletePet(id)
      .subscribe(() => {
        this._router.navigate(['/pets'])
      })
  }
  handleLike(id){
    if(!this.liked){
      this._httpService.updatePet(this.pet._id, {
      name: this.pet.name,
      type: this.pet.type,
      desc: this.pet.desc,
      skill1: this.pet.skill1,
      skill2: this.pet.skill2,
      skill3: this.pet.skill3,
      likes: (this.pet.likes + 1)
    })
    .subscribe((data:any) => {
      if(data.hasOwnProperty('errors')){
        this.errors = data.errors;
      }
      else{
        this.liked = true;
        this._httpService.getPet(this.pet._id)
        .subscribe((data:any) => {
          this.pet = data.pet});
      }
    })
    }
    

  }

}
