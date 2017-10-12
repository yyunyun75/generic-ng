import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.groups = this.route.snapshot.data['groups'];
    console.log('groups data',this.groups);
  }

}
