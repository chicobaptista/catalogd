import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

import { ItemListPage } from './item-list.page';

describe('ItemListPage', () => {
  let component: ItemListPage;
  let fixture: ComponentFixture<ItemListPage>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  let itemServiceStub: Partial<ItemService>;

  beforeEach(async(() => {
    itemServiceStub = {
      getItemList(): Item[] {
        return [{ id: '1', title: 'test1', subtitle: 'testing title', additionalFields: [] }];
      }
    };
    TestBed.configureTestingModule({
      declarations: [ItemListPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: routerSpy },
        {provide: ItemService, useValue: itemServiceStub}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Collection' as title`, () => {
    expect(component.title).toEqual('Collection');
  });

  it(`should display the title on title bar`, () => {
    const pageDe: DebugElement = fixture.debugElement;
    const headerDe = pageDe.query(By.css('ion-header'));
    const header: HTMLElement = headerDe.nativeElement;
    expect(header.textContent).toEqual(component.title);
  });

  describe(`when item list is empty`, () => {
    const itemList = [];
    it(`should display empty state title and subtitle`, () => {
      component.itemList = itemList;
      fixture.detectChanges();
      const pageDe: DebugElement = fixture.debugElement;
      const contentDe = pageDe.query(By.css('ion-content'));
      const content: HTMLElement = contentDe.nativeElement;
      expect(component.itemList.length === 0);
      expect(content.textContent).toContain(component.emptyState.title);
      expect(content.textContent).toContain(component.emptyState.subtitle);
    });
  });

  describe(`when item list is not empty`, () => {
    it(`should display a list of item templates`, () => {
      fixture.detectChanges();
      const pageDe: DebugElement = fixture.debugElement;
      const contentDe = pageDe.query(By.css('ion-content'));
      const content: HTMLElement = contentDe.nativeElement;
      expect(component.itemList.length > 0);
      expect(content.textContent).toContain(component.itemList[0].title);
      expect(content.textContent).toContain(component.itemList[0].subtitle);
    });

    it(`should display an item template for each item in the list`, () => {
      fixture.detectChanges();
      const pageDe: DebugElement = fixture.debugElement;
      const contentDe = pageDe.query(By.css('ion-content'));
      const itemDe = contentDe.queryAll(By.css('colectionItem'));
      expect(component.itemList.length > 0);
      expect(itemDe.length === component.itemList.length);
    });
  });
});
