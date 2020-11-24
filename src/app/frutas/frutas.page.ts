import { Component, OnInit } from '@angular/core';
import { Bancodedados001Service } from './../bancodedados001.service'


@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage {

  constructor(private bd : Bancodedados001Service) { }


}
