import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Salaried} from './salaried.model';
import {SERVER_API_URL} from '../app.constants';
@Injectable()
export class SalariedService {
  private resourceUrl = SERVER_API_URL + 'api/salaried';

  constructor(private http: HttpClient) {}
  findAll(): Observable<HttpResponse<Salaried[]>> {
    return this.http.get<HttpResponse<any>>(this.resourceUrl);
  }
  create(salarieds: Salaried[]): Observable<HttpResponse<Salaried[]>> {
    return this.http.post<Salaried[]>(this.resourceUrl, salarieds, { observe: 'response' });
  }
  findAllSalariedNotDuplcated(creteria: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this.resourceUrl + '/' + creteria );
  }
}
