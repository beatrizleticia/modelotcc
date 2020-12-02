import { Component, OnInit } from '@angular/core';
import { Bancodedados001Service } from './../bancodedados001.service'

@Component({
  selector: 'app-graos',
  templateUrl: './graos.page.html',
  styleUrls: ['./graos.page.scss'],
})
export class GraosPage {

  constructor(private bd : Bancodedados001Service) { }

}

