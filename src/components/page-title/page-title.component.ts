import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() isCentered: boolean = false;
  @Input() hasDetail: boolean = true;
}
