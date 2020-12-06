import { TestBed } from '@angular/core/testing';
import { Item } from '../models/item';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`when calling getItemList method`, () => {
    const itemList: Item[] = [{ id: '1', title: 'test1', subtitle: 'testing title' }];
    it(`should return current item list`, () => {
      service.itemList = itemList;
      expect(service.getItemList()).toEqual(itemList);
    });
  });
});
