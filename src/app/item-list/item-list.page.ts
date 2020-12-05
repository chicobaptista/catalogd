import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss']
})
export class ItemListPage implements OnInit {
  constructor() {}

  title = 'Collection';

  itemList: Item[] = [{ title: 'test1', subtitle: 'testing title' }];

  emptyState = {
    title: 'Nothing to see here',
    subtitle: `You don't have any items on your collection yet!`,
    imgSrc: 'assets/icon/folder-open-outline.svg'
  };

  ngOnInit() {}
}
