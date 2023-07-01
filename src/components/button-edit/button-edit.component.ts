import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.scss']
})
export class ButtonEditComponent {
  @Output() onClick : EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
