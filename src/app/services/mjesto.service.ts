import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interface/api-response-interface';

@Injectable({
  providedIn: 'root'
})
export class MjestoService {

  constructor(private http : HttpClient) { }

  apiUrl = `${environment.apiUrlGlobal}/mjesto`;

gettingAllMjesto() {
  return this.http.get<any[]>(this.apiUrl);
}

}