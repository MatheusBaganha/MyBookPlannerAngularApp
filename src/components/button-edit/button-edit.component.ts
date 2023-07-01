import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.scss']
})
export class ButtonEditComponent {
  @Input() isDarker: boolean = false;
  @Input() isBtnBigger: boolean = false;

  @Output() onClick : EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
