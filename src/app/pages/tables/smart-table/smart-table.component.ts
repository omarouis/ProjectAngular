import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TableSpaceService } from './../../../table-space.service';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

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
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

      TABLESPACE_NAME: {
        title: 'TABLESPACE_NAME',
        type: 'string',
      },
      BLOCK_SIZE: {
        title: 'BLOCK_SIZE',
        type: 'integer',
      },
      INITIAL_EXTENT: {
        title: 'INITIAL_EXTENT',
        type: 'integer',
      },
      MAX_SIZE: {
        title: 'MAX_SIZE',
        type: 'integer',
      },

    },
  };


  tablespaces:any[];
  source: LocalDataSource = new LocalDataSource();

  constructor( public tablespace: TableSpaceService) {
    this.tablespace.getTableSpace().subscribe(tablespaces => {
      this.tablespaces = tablespaces;
      console.log(tablespaces);
      this.source.load(tablespaces);
    });
  }


  ngOnInit() {


  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
