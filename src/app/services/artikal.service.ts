import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artikal } from '../interface/artikal-interface';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interface/api-response-iterface';

@Injectable({
  providedIn: 'root'
})
export class ArtikalService {

  constructor(private http : HttpClient) { }

  apiUrl = `${environment.apiUrlGlobal}/artikal`;

getAllArtikal() {
  return this.http.get<Artikal[]>(this.apiUrl);
}

getArtikalbyId(aid: number) {
  return this.http.get<Artikal>(`${this.apiUrl}/${aid}`);
}

insertArtikal(artikalpostput: Artikal) {
  return this.http.post<ApiResponse>(this.apiUrl, artikalpostput);
}

updateArtikal(artikalpostput: Artikal) {
  return this.http.put<ApiResponse>(`${this.apiUrl}/${artikalpostput.aid}`, artikalpostput);
}

deleteArtikal(aid: number) {
  return this.http.delete<ApiResponse>(`${this.apiUrl}/${aid}`);
}

}