import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Livre } from './model/livreModel'
import { LivreMenuService } from './livre-menu.service'
@Component({
  selector: 'app-livre-menu',
  templateUrl: './livre-menu.component.html',
  styleUrls: ['./livre-menu.component.css']
})
export class LivreMenuComponent implements OnInit {

  listeLivre : Livre[];
  collection : string;
  
  constructor(private route: ActivatedRoute, private router: Router, private livreMenuService: LivreMenuService) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.collection=params.get('collection');  
    });
    this.livreMenuService.getListeLivre(this.collection).subscribe((data: Livre[]) => {
      this.listeLivre = data;
    });
  }

}
