import { Component, OnInit } from '@angular/core';
import { Imenik } from 'src/app/interface/imenik-interface';
import { ImenikService } from 'src/app/services/imenik.service';

@Component({
  selector: 'app-imenik',
  templateUrl: './imenik.component.html',
  styleUrls: ['./imenik.component.scss']
})

export class ImenikComponent implements OnInit {

  searchText: any;

  displayedColumns: string[] = ['broj_lokala', 'ime_prezime', 'broj_kancelarije', 'organizaciona_jedinica', 'uredi', 'izbrisi'];
  imenik: Imenik[] = [];

  constructor(private imenikService: ImenikService) {}

  ngOnInit(): void {
    this.imenikService.getAllImenik().subscribe(data => {
      this.imenik = data;
    })
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






