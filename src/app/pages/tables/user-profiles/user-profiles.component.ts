import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from './../../../user.service';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { user } from '../../../user';


@Component({
  selector: 'ngx-user-profiles',
  templateUrl: './user-profiles.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class UserProfilesComponent  {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmEdite: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {

      USER_NAME: {
        title: 'USER_NAME',
        type: 'string',
      },
      DISPLAY_NAME: {
        title: 'DISPLAY_NAME',
        type: 'string',
      },
      DESCRIPTION: {
        title: 'DESCRIPTION',
        type: 'string',
      },
      GENDER: {
        title: 'GENDER',
        type: 'sring',
      },
      AGE: {
        title: 'AGE',
        type: 'integer',
      },
      COUNTRY: {
        title: 'CONTRY',
        type: 'sring',
      },
      THEME: {
        title: 'THEME',
        type: 'sring',
      },

    },
  };


  user_profiles:any[];
  source: LocalDataSource = new LocalDataSource();

  constructor( public user: UserService) {
    this.user.getUser().subscribe(user => {
      this.user = user;

      this.source.load(user);
    });
  }


  ngOnInit() {


  }




  onDeleteConfirm(event): void {
    console.log(event.data.USER_NAME);
    var fo:String =event.data.USER_NAME;
    if (window.confirm('Are you sure you want to delete?')) {


      this.user.deleteUser(fo).subscribe(() => console.log("user deleted")
      );


    } else {
      event.confirm.reject();
    }
  }

  editButton(event){
    console.log("hhhhhhhh");
    var fo:String =event.data.USER_NAME;
    if (window.confirm('Are you sure want to update')){

      this.user.UpdateUser(fo) ;
    }
  }


  }



