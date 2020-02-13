import { Component, OnInit } from '@angular/core';
import { Collection } from './model/collectionModel';
import { CollectionMenuService } from './collection-menu.service';

@Component({
  selector: 'app-collection-menu',
  templateUrl: './collection-menu.component.html',
  styleUrls: ['./collection-menu.component.css']
})
export class CollectionMenuComponent implements OnInit {
  
  listeCollection : Collection[];
  
  constructor(private collectionMenuService: CollectionMenuService) {
    this.collectionMenuService.getListeCollection().subscribe((data: Collection[]) => {
      this.listeCollection = data;
    });
  }

  ngOnInit() {
  }

}
