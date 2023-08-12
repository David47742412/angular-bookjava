import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../environment/enviroment.prod';
import { IResponseApi } from '../interface/response-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService<T> {
  constructor(private readonly _http: HttpClient) {}

  onRequest<TS = any>(
    uri: string,
    body?: TS,
    method: string = 'GET',
    token?: string,
  ): Observable<HttpEvent<IResponseApi<T>>> {
    try {
      const urlBase = environment.host_api;
      let headers: any = null;
      if (token != undefined) {
        headers = new HttpHeaders();
        headers.set('Authorization', `Bearer ${token}`);
      }
      const httpRequest: any = new HttpRequest(method, `${urlBase}/${uri}`, body, {
        headers: headers,
      });

      return this._http.request<IResponseApi<T>>(httpRequest);
    } catch (ex: any) {
      return ex;
    }
  }
}
