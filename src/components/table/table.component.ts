import { Component, Input } from '@angular/core';
import { IBook, UserBooks } from 'src/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() books! : IBook | null;
  @Input() userBooks! : UserBooks[] | null;
  @Input() page : number = 0;
}
