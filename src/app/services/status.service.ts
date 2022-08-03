import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interface/api-response-interface';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http : HttpClient) { }

  apiUrl = `${environment.apiUrlGlobal}/status`;

getAllStatus() {
  return this.http.get<any[]>(this.apiUrl);
}

}