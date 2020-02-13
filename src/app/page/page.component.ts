import { Component, OnInit } from '@angular/core';
import { PageService } from './page.service';
import { Page } from './model/pageModel';
import { Livre } from '../livre-menu/model/livreModel'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: Page;
  numChap: string = "1";
  mess: string = "coucou";
  pageSuivanteTab: Array<string> = ["1", "2", "3", "4"];
  resultatDe: string = "";
  titreLivre : string;
  constructor(private route: ActivatedRoute, private router: Router, private pageService : PageService) { }

  ngOnInit() {
    //récupération des paramêtre de l'adresse
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.titreLivre=params.get('livre');  
    });
    this.pageService.getparagraphe(this.titreLivre,this.numChap).subscribe((data: Page) => {
      this.page = data;
      this.pageSuivanteTab = this.page.chapitreSuivant.split(" ");
    });

  }

  changeChap(num: string) {
    this.numChap = num;
    this.pageService.getparagraphe(this.titreLivre,this.numChap).subscribe((data: Page) => {
      this.page = data;
      this.pageSuivanteTab = this.page.chapitreSuivant.split(" ");
    });
  }

  message(message: string) {
    this.mess = message;
  }

  jetdedes(nbdes: number) {
    this.resultatDe = "";
    for (var _i = 1; _i <= nbdes; _i++) {
      this.resultatDe += "Dé " + _i + " : " + Math.floor(Math.random() * Math.floor(6) + 1) + " ";
    }
  }
}
