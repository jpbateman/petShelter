import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet = {
    name: '',
    type: '',
    desc: '',
    skill1: '',
    skill2: '',
    skill3: ''
  };
  errors = [];

  constructor(
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }
  handleCancel(){
    this._router.navigate(['/pets']);
  }
  handleSubmit(){
    this._httpService.createPet(this.newPet)
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
