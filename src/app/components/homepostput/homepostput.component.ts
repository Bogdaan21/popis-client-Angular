import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Direktorat } from 'src/app/interface/direktorat-interface';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { PocetnastranaService } from 'src/app/services/pocetnastrana.service';

@Component({
  selector: 'app-homepostput',
  templateUrl: './homepostput.component.html',
  styleUrls: ['./homepostput.component.scss']
})
export class HomepostputComponent implements OnInit, AfterViewInit {

  pocetnastranapostput: Direktorat = {direktoratid: null, naziv_direktorata: null, opis_direktorata: null, slika_direktorata: null};

  edit: boolean = false;

  fileData: any;

  constructor(private pocetnastranapostputservice: PocetnastranaService, private router: Router, private activatedRoute: ActivatedRoute, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if(data['direktoratid']) {
        this.edit = true;
        this.pocetnastranapostputservice.getDirektoratById(data['direktoratid']).subscribe(direktoratData => {
          this.pocetnastranapostput = direktoratData;
        })
      }
    })
  }

  ngAfterViewInit(): void {
  }

  save() {
    if (this.edit) {
      this.pocetnastranapostputservice.updateDirektorat(this.pocetnastranapostput).subscribe(data => {
        if(data.affectedRows == 1) {
          alert ('Direktorat uređen!');
          this.router.navigateByUrl('/direktorat');
        }
      })
    }
    else {
      this.pocetnastranapostputservice.insertDirektorat(this.pocetnastranapostput).subscribe(data => {
        if(data.affectedRows == 1) {
          alert ('Direktorat unijet!');
          this.router.navigateByUrl('/direktorat');
        }
      })

  }
}

uploadFile(e: any) { 
  this.fileData = e.target.files[0]; 
  const formData = new FormData();

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data')

  formData.append('img', this.fileData) 

  this.fileUploadService.uploadFile(formData, headers).subscribe(data => { 
   this.pocetnastranapostput.slika_direktorata = data.fileName; 
  })
}

}
