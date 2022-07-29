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

  artikalpostput: Artikal = {aid: null, model: null, zaduzenje: null, inventarski_broj_novi: null, inventarski_broj_stari: null, nabavna_cijena: null, sadasnja_vrijednost: null, godina_nabavke: null, sprat: null, broj_kancelarije: null, napomena: null, tip: null, konto: null, naziv: null};
  artikal: Artikal[] = [];

  edit: boolean = false;

  constructor(private artikalpostputService: ArtikalService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dajsve();
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
  dajsve() {
    this.artikalpostputService.getAllArtikal().subscribe(data => {
      this.artikal = data;
  })
}
}
