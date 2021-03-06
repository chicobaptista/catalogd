import { TestBed } from '@angular/core/testing';
import { ItemFactory } from 'src/testing/itemFactory';
import { Item } from '../models/item';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  const testItemFactory = new ItemFactory;
  const testItem: Item = testItemFactory.generateItem();
  const itemList: Item[] = [testItem];

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
    it(`should return item of that Id`, () => {
      service.itemList = itemList;
      expect(service.getItemById('1')).toEqual(testItem);
    });
  });
});
