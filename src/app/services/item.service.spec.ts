import { TestBed } from '@angular/core/testing';
import { Item } from '../models/item';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  const itemList: Item[] = [{ id: '1', title: 'test1', subtitle: 'testing title' }];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`when calling getItemList method`, () => {
    it(`should return current item list`, () => {
      service.itemList = itemList;
      expect(service.getItemList()).toEqual(itemList);
    });
  });

  describe(`when calling getItemById method`, () => {
    const testItem: Item = { id: '1', title: 'test1', subtitle: 'testing title' };
    it(`should return item of that Id`, () => {
      service.itemList = itemList;
      expect(service.getItemById('1')).toEqual(testItem);
    });
  });
});
