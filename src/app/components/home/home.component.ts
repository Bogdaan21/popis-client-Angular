import { Component, OnInit } from '@angular/core';
import { Direktorat } from 'src/app/interface/direktorat-interface';
import { PocetnastranaService } from 'src/app/services/pocetnastrana.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  direktorat: Direktorat[] = [];

  constructor(private direktoratService: PocetnastranaService) { }

  ngOnInit(): void{
    this.fillData();
  }

  deleteDiraktorat(direktoratid: number): void {
    this.direktoratService.deleteDirektorat(direktoratid).subscribe(data => {
      if(data.affectedRows == 1) {
        alert('Direktorat izbrisan');
        this.fillData();
      }
    })
  }

  fillData(){
    this.direktoratService.getAllDirektorat().subscribe(data => {
      this.direktorat = data;
  })
}
}
