import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artikal } from 'src/app/interface/artikal-interface';
import { Mjesto } from 'src/app/interface/mjesto-interface';
import { Status } from 'src/app/interface/status-intefrace';
import { Vrsta } from 'src/app/interface/vrsta-interface';
import { ArtikalService } from 'src/app/services/artikal.service';
import { MjestoService } from 'src/app/services/mjesto.service';
import { StatusService } from 'src/app/services/status.service';
import { VrstaService } from 'src/app/services/vrsta.service';

@Component({
  selector: 'app-artikalpostput',
  templateUrl: './artikalpostput.component.html',
  styleUrls: ['./artikalpostput.component.scss']
})
export class ArtikalpostputComponent implements OnInit, AfterViewInit {

  artikalpostput: Artikal = {aid: null, model: null, zaduzenje: null, inventarski_broj_stari: null, inventarski_broj_novi: null, nabavna_cijena: null, sadasnja_vrijednost: null, sprat: null, broj_kancelarije: null, napomena: null, godina_nabavke: null, tip: null, konto: null, naziv: null};
  artikal: Artikal[] = [];
  status: Status[] = [];
  mjesto: Mjesto[] = [];
  vrsta: Vrsta[] = [];

  edit: boolean = false;

  constructor(private artikalpostputService: ArtikalService, private statusService: StatusService, private mjestoService: MjestoService, private vrstaService: VrstaService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
    this.statusService.getAllStatus().subscribe(statusData => {
      this.status = statusData;
    })

    this.mjestoService.gettingAllMjesto().subscribe(mjestoData => {
      this.mjesto = mjestoData;
    })

    this.vrstaService.getAllVrsta().subscribe(vrstaData => {
      this.vrsta = vrstaData;
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
