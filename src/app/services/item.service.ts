import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {}

  itemList: Item[] = [{ id: '1', title: 'test1', subtitle: 'testing title' }];

  public getItemList() {
    return this.itemList;
  }
}