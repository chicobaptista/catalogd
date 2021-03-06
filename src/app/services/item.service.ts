import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {}

  itemList: Item[] = [{ id: '1', title: 'test1', subtitle: 'testing title', additionalFields: [{name: 'Origin', value: 'Bohemia'}], image: 'assets/icon/folder-open-outline.svg' }];

  public getItemList(): Item[] {
    return this.itemList;
  }

  public getItemById(id: string): Item {
    return this.itemList.find(i => i.id === id);
  }
}
