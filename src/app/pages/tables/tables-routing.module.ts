import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';


const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  },
  {
    path: 'user-profiles',
    component: UserProfilesComponent,
  },],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  UserProfilesComponent,
];
