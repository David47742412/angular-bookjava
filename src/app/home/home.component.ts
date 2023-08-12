import { Component } from '@angular/core';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private readonly _request: RequestService<any>) {}

  ngOnInit() {
    this._request.onRequest('api/character').subscribe((data) => {
      console.log(data);
    });
  }
}
