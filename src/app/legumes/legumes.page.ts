import { Component, OnInit } from '@angular/core';
import { Bancodedados001Service } from './../bancodedados001.service';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.page.html',
  styleUrls: ['./legumes.page.scss'],
})
export class LegumesPage {

  constructor(private bd : Bancodedados001Service) { }


}

