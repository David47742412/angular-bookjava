import { Component } from '@angular/core';
import { RequestService } from '../../service/request.service';
import { FindBookDto } from '../../model/find/find-book.dto';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  books: FindBookDto[] = [];

  constructor(
    private readonly _request: RequestService<FindBookDto>,
    private readonly _snack: MatSnackBar,
  ) {}

  ngOnInit() {
    this._request.onRequest('book').subscribe((ev) => {
      if (ev instanceof HttpResponse) {
        this.books = ev.body!.body;
        return;
      }
      if (ev instanceof HttpErrorResponse) {
        this._snack.open('Ha ocurrido un Error al momento de traer los datos', 'Cerrar', {
          duration: 5000,
        });
      }
    });
  }
}
