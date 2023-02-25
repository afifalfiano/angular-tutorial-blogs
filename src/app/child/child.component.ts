import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() name!: string;
  feedback = '';
  @Output() childToParent: EventEmitter<string> = new EventEmitter<string>();

  onSendFeedback(feedback: string) {
    this.childToParent.emit(feedback);
  }
}
