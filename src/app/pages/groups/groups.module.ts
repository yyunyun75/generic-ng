import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { groupsRouting } from './groups.routing';
import { GroupService } from '../../services/group.service';
import { GroupResolve } from '../../services/group-resolve';
import { FilterPipe } from '../../pipes/filter.pipe';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    groupsRouting,
    NgbModule
  ],
  declarations: [GroupListComponent, GroupEditComponent, FilterPipe],
  providers:[
    GroupService,
    GroupResolve
  ]
})
export class GroupsModule { }
