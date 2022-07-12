import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interface/api-response-interface';
import { Imenik } from '../interface/imenik-interface';

@Injectable({
  providedIn: 'root'
})
export class ImenikService {

  constructor(private http: HttpClient) {}

  apiUrl = `${environment.apiUrlGlobal}/imenik`;

  getAllImenik() {
    return this.http.get<Imenik[]>(this.apiUrl);
  }
  
  getImenikbyID(imenikid: number) {
    return this.http.get<Imenik>(`${this.apiUrl}/${imenikid}`);
  }
  
  insertImenik(imenikpostput: Imenik) {
    return this.http.post<ApiResponse>(this.apiUrl, imenikpostput);
  }
  
  updateImenik(imenikpostput: Imenik) {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${imenikpostput.imenikid}`, imenikpostput);
  }
  
  deleteImenik(imenikid: number) {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${imenikid}`);
  }
  

}
