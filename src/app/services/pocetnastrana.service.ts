import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interface/api-response-interface';
import { Direktorat } from '../interface/direktorat-interface';

@Injectable({
  providedIn: 'root'
})
export class PocetnastranaService {

  apiUrl = `${environment.apiUrlGlobal}/direktorat`;

  constructor(private http: HttpClient) { }

  getAllDirektorat(){
    return this.http.get<Direktorat[]>(this.apiUrl);
  }

  getDirektoratById(direktoratid: number){
    return this.http.get<Direktorat>(`${this.apiUrl}/${direktoratid}`);
  }
  
  insertDirektorat(direktorat: Direktorat) {
    return this.http.post<ApiResponse>(this.apiUrl, direktorat);
  }

  updateDirektorat(direktorat: Direktorat) {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${direktorat.direktoratid}`, direktorat);
  }

  deleteDirektorat(direktoratid: number) {
    return this.http.delete<ApiResponse> (`${this.apiUrl}/${direktoratid}`);
  }

}
