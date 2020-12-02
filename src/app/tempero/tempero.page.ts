import { Component, OnInit } from '@angular/core';
import { Bancodedados001Service } from './../bancodedados001.service'

@Component({
  selector: 'app-tempero',
  templateUrl: './tempero.page.html',
  styleUrls: ['./tempero.page.scss'],
})
export class TemperoPage {

  constructor(private bd : Bancodedados001Service) { }


}

