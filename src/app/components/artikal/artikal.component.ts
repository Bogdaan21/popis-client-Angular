import { Component, OnInit } from '@angular/core';
import { Artikal } from 'src/app/interface/artikal-interface';
import { ArtikalService } from 'src/app/services/artikal.service';

@Component({
  selector: 'app-artikal',
  templateUrl: './artikal.component.html',
  styleUrls: ['./artikal.component.scss']
})
export class ArtikalComponent implements OnInit {

  displayedColumns: string[] = [ 'aid', 'model', 'Inventarski_broj_novi', 'Inventarski_broj_stari' ];

  artikal: Artikal[] = [];

  constructor(private artikalService: ArtikalService) { }

  ngOnInit(): void {
this.artikalService.getAllArtikal().subscribe(data => {
  this.artikal = data;
})
  }
}
