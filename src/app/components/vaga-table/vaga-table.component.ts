import { FormStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VagasInterface } from 'src/app/model/vagasInterface';


@Component({
  selector: 'app-vaga-table',
  templateUrl: './vaga-table.component.html',
  styleUrls: ['./vaga-table.component.scss']
})
export class VagaTableComponent implements OnInit {
  

  vagas:VagasInterface[] = [];
  constructor() {
    //this.vagas = [];
   }

  ngOnInit(): void {
  }


  

}
