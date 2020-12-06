import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss']
})
export class ItemListPage implements OnInit {
  constructor(private router: Router, private itemService: ItemService) {}

  title = 'Collection';

  itemList: Item[];

  emptyState = {
    title: 'Nothing to see here',
    subtitle: `You don't have any items on your collection yet!`,
    imgSrc: 'assets/icon/folder-open-outline.svg'
  };

  ngOnInit() {
    this.itemList =  this.itemService.getItemList();
  }

  navigate(id: string) {
    this.router.navigate([`/item-details/${id}`]);
  }
}
