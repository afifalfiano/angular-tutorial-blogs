import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * ChildComponent is component to show data from parent and emit data to parent.
 */
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  /**Description: Variable to get value from parent component */
  @Input() name!: string;

  /**Description:  Variable to assign value of two way data binding on input text */
  feedback = '';

  /**Description: Variable to emit data from child to parent */
  @Output() childToParent: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Description: onSendFeedback is function to emit data from child component into parent component}
   * @param {string} feedback
   * @returns {void}
   * @memberof ChildComponent
   */
  onSendFeedback(feedback: string) {
    this.childToParent.emit(feedback);
  }
}
