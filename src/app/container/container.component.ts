import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  fromDataSiblingOne = 'Hello Number Two';
  fromDataSiblingTwo = 'Hello Number One';

  newDataFromSiblingOne = '';
  newDataFromSiblingTwo = '';

  getDataSiblingOne($event: any) {
    this.newDataFromSiblingOne = $event;
  }

  getDataSiblingTwo($event: any) {
    this.newDataFromSiblingTwo = $event;
  }
}
