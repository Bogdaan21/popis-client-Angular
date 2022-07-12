import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imenik } from 'src/app/interface/imenik-interface';
import { ImenikService } from 'src/app/services/imenik.service';

@Component({
  selector: 'app-imenikpostpust',
  templateUrl: './imenikpostpust.component.html',
  styleUrls: ['./imenikpostpust.component.scss']
})
export class ImenikpostpustComponent implements OnInit, AfterViewInit {

  imenikpostput: Imenik ={imenikid: null, ime_prezime: null, broj_kancelarije: null, organizaciona_jedinica: null, broj_lokala: null}

  edit: boolean = false;

  constructor(private imenikpostputService: ImenikService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if(data['imenikid']) {
        this.edit = true;
        this.imenikpostputService.getImenikbyID(data['imenikid']).subscribe(imenikpostputData => {
          this.imenikpostput = imenikpostputData;
        })
      }
    })
  }

  ngAfterViewInit(): void {
  }

  save() {
    if (this.edit) {
      this.imenikpostputService.updateImenik(this.imenikpostput).subscribe(data => {
        if(data.affectedRows == 1) {
          alert ('Imenik uređen!');
          this.router.navigateByUrl('/imenik');
        }
      })
    }
    else {
      this.imenikpostputService.insertImenik(this.imenikpostput).subscribe(data => {
        if(data.affectedRows == 1) {
          alert ('Imenik unijet!');
          this.router.navigateByUrl('/imenik');
        }
      })

  }
}


}
