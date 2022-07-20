import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Imenik } from 'src/app/interface/imenik-interface';
import { ImenikService } from 'src/app/services/imenik.service';

@Component({
  selector: 'app-imenik',
  templateUrl: './imenik.component.html',
  styleUrls: ['./imenik.component.scss']
})

export class ImenikComponent implements OnInit {

  displayedColumns: string[] = ['broj_lokala', 'ime_prezime', 'broj_kancelarije', 'organizaciona_jedinica', 'uredi', 'izbrisi'];
  imenik: Imenik[] = [];
  dataSource = new MatTableDataSource(this.imenik);

  constructor(private imenikService: ImenikService) {}

  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {
    this.imenikService.getAllImenik().subscribe(data => {
      this.imenik = data;
    })
    this.dataSource.sort = this.sort;
  }


  deleteImenik(imenikid: number): void {
    this.imenikService.deleteImenik(imenikid).subscribe(data => {
      if (data.affectedRows == 1) {
        alert('Kontakt izbrisan!');
        this.ngOnInit();
      }
    })
  }

}






