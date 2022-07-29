import { Component, OnInit } from '@angular/core';
import { Artikal } from 'src/app/interface/artikal-interface';
import { ArtikalService } from 'src/app/services/artikal.service';

@Component({
  selector: 'app-artikal',
  templateUrl: './artikal.component.html',
  styleUrls: ['./artikal.component.scss']
})

export class ArtikalComponent implements OnInit {

  displayedColumns: string[] = [ 'tip', 'Model', 'Inventarski_broj_novi', 'konto', 'sprat', 'broj_kancelarije', 'nabavna_cijena', 'sadasnja_vrijednost', 'godina_nabavke' ,'napomena', 'Zaduzenje', 'Uredi', 'Izbrisi', 'naziv'];
  // inventarski_broj_stari uklonjen. Dodati ga u displayedColumns i u html-u koji sam zakometarisao. U interface ostao.
  // status_id nije povezan ni sa cim trenutno jer ne znam da li u ovoj komponenti smiju da se povezuju samo atribudi koji su za nju, i strani kljucevi a status je strani kljuc od knjigovodst. takodje izbrisan iz liste displaycolums
  artikal: Artikal[] = [];
  // status_id: Status_id[] = {sid: null, popisano: null, otpisano: null, nepopisano: null}; pokusaj da se status prikaze u (select)

  constructor(private artikalService: ArtikalService) { }

  ngOnInit(): void {
    this.fillData();
  }

  deleteArtikal(aid: number): void {
    this.artikalService.deleteArtikal(aid).subscribe(data => {
      if (data.affectedRows == 1) {
        alert('Artikal deleted!');
        this.fillData();
      }
    })
  }

  fillData() {
    this.artikalService.getAllArtikal().subscribe(data => {
      this.artikal = data;
    })
  }

}
