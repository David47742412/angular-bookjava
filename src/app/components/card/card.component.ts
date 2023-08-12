import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'book-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent {
  @Input({ required: true }) id?: string = '';
  @Input({ required: true }) title?: string = '';
  @Input({ required: true }) description?: string = '';
  @Input({ required: true }) category?: string = '';
  @Output() edit = new EventEmitter<string>(false);
  @Output() deleted = new EventEmitter<string>(false);

  onUpdate(id?: string) {
    console.log(id);
    this.edit.emit(id);
  }

  onDeleted(id?: string) {
    console.log(id);
    this.deleted.emit(id);
  }
}
