import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.scss']
})
export class SiblingTwoComponent {
  @Input() fromDataSiblingOne!: string;
  @Output() sendDataToSiblingOne: EventEmitter<string> = new EventEmitter<string>();
  @Input() newDataFromSiblingOne!: string;

  sendToSiblingOne() {
    this.sendDataToSiblingOne.emit('Good by sibling one');
  }

}
