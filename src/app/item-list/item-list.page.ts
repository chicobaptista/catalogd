import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  constructor() { }

  title = 'Collection';

  itemList: any[] = [];

  emptyState = {
    title: 'Nothing to see here',
    subtitle: `You don't have any items on your collection yet!`
  };

  ngOnInit() {
  }

}
