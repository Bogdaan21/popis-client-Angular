import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artikal } from '../interface/artikal-interface';
import { environment } from 'src/environments/environment';

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
  return this.http.get<Artikal>(`${this.apiUrl}/${aid}`)
}

}