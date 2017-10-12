import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import {GroupService} from './group.service';

@Injectable()
export class GroupResolve implements Resolve<Object>{

  constructor(private GroupService: GroupService) {}

  resolve(route: ActivatedRouteSnapshot){
    return this.GroupService.get();
  }
}
