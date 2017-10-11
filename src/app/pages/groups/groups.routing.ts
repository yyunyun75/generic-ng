import { Routes } from '@angular/Router';
import { RouterModule } from '@angular/router';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupEditComponent } from './group-edit/group-edit.component';

const groupsRoutes: Routes = [
  {path: 'groups', children:[
    {path: '', component: GroupListComponent},
    {path: ':id', component: GroupEditComponent}
  ]},
];

export const groupsRouting = RouterModule.forChild(groupsRoutes);
