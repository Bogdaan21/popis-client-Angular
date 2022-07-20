import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artikal } from 'src/app/interface/artikal-interface';
import { ArtikalService } from 'src/app/services/artikal.service';

@Component({
  selector: 'app-artikalpostput',
  templateUrl: './artikalpostput.component.html',
  styleUrls: ['./artikalpostput.component.scss']
})
export class ArtikalpostputComponent implements OnInit, AfterViewInit {

  artikalpostput: Artikal = {cijena_id: null, knjigovodstvena_evidencija_id: null, mjesto_id: null, vrsta_id: null, aid: null, model: null, zaduzenje: null, inventarski_broj_novi: null, inventarski_broj_stari: null, nabavna_cijena: null, sadasnja_vrijednost: null, godina_nabavke: null, sprat: null, broj_kancelarije: null, napomena: null, tip: null, konto: null, popisano: null, otpisano: null , nepopisano: null, status_id: null};
  sprat: any = [{viewValue: 'Prizemlje'}, {viewValue: 'I'}, {viewValue: 'II'}, {viewValue: 'III'}, {viewValue: 'VI'}, {viewValue: 'V'},];
  status: any = [{viewValue: 'Popisano'}, {viewValue: 'Nepopisano'}, {viewValue: 'Otpisano'}];

  edit: boolean = false;

  constructor(private artikalpostputService: ArtikalService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if(data['aid']) {
        this.edit = true;
        this.artikalpostputService.getArtikalbyId(data['aid']).subscribe(artikalpostputData => {
          this.artikalpostput = artikalpostputData;
        })
      }
    })
  }

  ngAfterViewInit(): void {
  }

  save() {
    if (this.edit) {
      this.artikalpostputService.updateArtikal(this.artikalpostput).subscribe(data => {
        if(data.affectedRows == 1) {
          alert ('Artikal uređen!');
          this.router.navigateByUrl('/artikal');
        }
      })
    }
    else {
      this.artikalpostputService.insertArtikal(this.artikalpostput).subscribe(data => {
        if(data.affectedRows == 1) {
          alert ('Artikal unijet!');
          this.router.navigateByUrl('/artikal');
        }
      })

  }
}
}
