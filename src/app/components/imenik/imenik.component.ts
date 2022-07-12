import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Imenik } from 'src/app/interface/imenik-interface';
import { ImenikService } from 'src/app/services/imenik.service';

@Component({
  selector: 'app-imenik',
  templateUrl: './imenik.component.html',
  styleUrls: ['./imenik.component.scss']
})

export class ImenikComponent implements OnInit {

  displayedColumns: string[] = ['imenikid', 'broj_lokala', 'ime_prezime', 'broj_kancelarije', 'organizaciona_jedinica', 'uredi'];
  imenik: Imenik[] = [];

  constructor(private imenikService: ImenikService) {}

  ngOnInit(): void {
    this.imenikService.getAllImenik().subscribe(data => {
      this.imenik = data;
    })
  }

  deleteArtikal(imenikid: number): void {
    this.imenikService.deleteImenik(imenikid).subscribe(data => {
      if (data.affectedRows == 1) {
        alert('Kontakt izbrisan!');
        this.ngOnInit();
      }
    })
  }


}




