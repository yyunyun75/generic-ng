import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { groupsRouting } from './groups.routing';

@NgModule({
  imports: [
    CommonModule,
    groupsRouting
  ],
  declarations: [GroupListComponent, GroupEditComponent]
})
export class GroupsModule { }
