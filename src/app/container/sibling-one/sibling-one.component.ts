import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.scss']
})
export class SiblingOneComponent {
  @Input() fromDataSiblingTwo!: string;
  @Output() sendDataToSiblingTwo: EventEmitter<string> = new EventEmitter();
  @Input() newDataFromSiblingTwo!: string;
  sendToSiblingTwo() {
    this.sendDataToSiblingTwo.emit('Good by sibling two');
  }
}
