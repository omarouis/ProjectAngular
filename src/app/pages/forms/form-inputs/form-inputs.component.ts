import { Component } from '@angular/core';
import { UserService } from '../../../user.service';
import {user} from './../../../user';
import { Router} from '@angular/router';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  user: user={

   USER_NAME:"",
   DISPLAY_NAME:"",
   DESCRIPTION:"",
   GENDER:"",
   AGE:0 ,
   COUNTRY:"",
   THEME:"",
  }
  constructor(  public users: UserService ,public Routers : Router)  {


  }



  ngOnInit() {
  }

  mySubmit({value,valid}:{value:user,valid:boolean}) {

    if(!valid){
      console.log("formulaire n est pas valide");

     }else{


        console.log(value);
       this.users.addUser(value);
       this.Routers.navigate(['/etudiant']);

    }
  }

  }







