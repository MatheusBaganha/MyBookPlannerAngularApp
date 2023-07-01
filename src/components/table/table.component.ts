import { Component, Input } from '@angular/core';
import { IBook } from 'src/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() books! : IBook;
  @Input() page : number = 0;
}
