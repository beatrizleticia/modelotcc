import { Component, OnInit } from '@angular/core';
import { Bancodedados001Service } from './../bancodedados001.service'

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage{

  constructor(private bd : Bancodedados001Service) { }


}
