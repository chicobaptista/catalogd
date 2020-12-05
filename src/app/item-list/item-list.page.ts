import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss']
})
export class ItemListPage implements OnInit {
  constructor(private router: Router) {}

  title = 'Collection';

  itemList: Item[] = [{ id: '1', title: 'test1', subtitle: 'testing title' }];

  emptyState = {
    title: 'Nothing to see here',
    subtitle: `You don't have any items on your collection yet!`,
    imgSrc: 'assets/icon/folder-open-outline.svg'
  };

  ngOnInit() {}

  navigate(id: string) {
    this.router.navigate([`/item-details/${id}`]);
  }
}
