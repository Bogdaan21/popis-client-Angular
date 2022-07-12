import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fileUploadResponse } from '../interface/file-upload-response-interface';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  ApiUrl = `${environment.apiUrlGlobal}/upload`;

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData, headers: HttpHeaders) { 
    return this.http.post<fileUploadResponse>(this.ApiUrl, formData, {
      headers: headers
    })
  }
}
