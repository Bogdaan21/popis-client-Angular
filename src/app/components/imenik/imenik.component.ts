import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Imenik } from 'src/app/interface/imenik-interface';


const imenikdata: Imenik[] = [
  {brojLokala: 200, imePrezime: 'Sekratarica kabineta', brojKancelarije: 400, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 201, imePrezime: 'Ana Novaković Đurović', brojKancelarije: 401, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 202, imePrezime: 'Radnima Lainović', brojKancelarije: 404, organizacionaJedinica: 'Direktorat za razvoj stanovanja i legalizaciju'},
  {brojLokala: 203, imePrezime: '', brojKancelarije: null, organizacionaJedinica: ''},
  {brojLokala: 204, imePrezime: 'Anja Jovanović', brojKancelarije: 313, organizacionaJedinica: 'Direkcija za upravljanje otpadom i komunalne usluge'},
  {brojLokala: 205, imePrezime: 'Radovan Bojović', brojKancelarije: 403, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 200, imePrezime: 'Sekratarica kabineta', brojKancelarije: 400, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 201, imePrezime: 'Ana Novaković Đurović', brojKancelarije: 401, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 202, imePrezime: 'Radnima Lainović', brojKancelarije: 404, organizacionaJedinica: 'Direktorat za razvoj stanovanja i legalizaciju'},
  {brojLokala: 203, imePrezime: '', brojKancelarije: null, organizacionaJedinica: ''},
  {brojLokala: 204, imePrezime: 'Anja Jovanović', brojKancelarije: 313, organizacionaJedinica: 'Direkcija za upravljanje otpadom i komunalne usluge'},
  {brojLokala: 205, imePrezime: 'Radovan Bojović', brojKancelarije: 403, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 200, imePrezime: 'Sekratarica kabineta', brojKancelarije: 400, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 201, imePrezime: 'Ana Novaković Đurović', brojKancelarije: 401, organizacionaJedinica: 'Kabinet ministra'},
  {brojLokala: 202, imePrezime: 'Radnima Lainović', brojKancelarije: 404, organizacionaJedinica: 'Direktorat za razvoj stanovanja i legalizaciju'},
  {brojLokala: 203, imePrezime: '', brojKancelarije: null, organizacionaJedinica: ''},
  {brojLokala: 204, imePrezime: 'Anja Jovanović', brojKancelarije: 313, organizacionaJedinica: 'Direkcija za upravljanje otpadom i komunalne usluge'},
  {brojLokala: 205, imePrezime: 'Radovan Bojović', brojKancelarije: 403, organizacionaJedinica: 'Kabinet ministra'},
];

@Component({
  selector: 'app-imenik',
  templateUrl: './imenik.component.html',
  styleUrls: ['./imenik.component.scss']
})

export class ImenikComponent implements AfterViewInit {


  displayedColumns: string[] = ['brojLokala', 'imePrezime', 'brojKancelarije', 'organizacionaJedinica'];
  imenik = new MatTableDataSource(imenikdata);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.imenik.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}




