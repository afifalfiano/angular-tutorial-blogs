import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  name = 'Unknown';
  child: any;

  getDataChild($event: any) {
    this.child = $event;
  }
}
