import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
  @Input() isCentered: boolean = false;
  @Input() isLargeWidth: boolean = false;
}
