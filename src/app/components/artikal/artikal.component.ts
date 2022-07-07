import { Component, OnInit } from '@angular/core';
import { Artikal } from 'src/app/interface/artikal-interface';
import { ArtikalService } from 'src/app/services/artikal.service';

@Component({
  selector: 'app-artikal',
  templateUrl: './artikal.component.html',
  styleUrls: ['./artikal.component.scss']
})
export class ArtikalComponent implements OnInit {

  displayedColumns: string[] = [ 'Aid', 'Vrsta_id', 'Model', 'Inventarski_broj_novi', 'Cijena_id', 'Knjigovodstvena_evidenija_id', 'Mjesto_id', 'Status_id', 'Zaduzenje', 'Uredi', 'Izbrisi'];
  // inventarski_broj_stari uklonjen. Dodati ga u displayedColumns i u html-u koji sam zakometarisao. U interface ostao.
  // status_id nije povezan ni sa cim trenutno jer ne znam da li u ovoj komponenti smiju da se povezuju samo atribudi koji su za nju, i strani kljucevi a status je strani kljuc od knjigovodst.
  artikal: Artikal[] = [];

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
