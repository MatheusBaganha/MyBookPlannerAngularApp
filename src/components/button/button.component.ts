import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() hasEvent = true;
  @Input() isBlack = false;
  @Input() isGray = false;
  @Input() isSmall = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  handleClick() {
    if (this.hasEvent) {
      this.onClick.emit();
    }
  }
}
