import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { ItemListPage } from './item-list.page';

describe('ItemListPage', () => {
  let component: ItemListPage;
  let fixture: ComponentFixture<ItemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListPage ],
      imports: [IonicModule.forRoot()]
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

  describe('when item list is empty', () => {
    const emptyList = [];
    it(`should display empty state title and subtitle`, () => {
      component.itemList = emptyList;
      const pageDe: DebugElement = fixture.debugElement;
      const contentDe = pageDe.query(By.css('ion-content'));
      const content: HTMLElement = contentDe.nativeElement;
      expect(content.textContent).toContain(component.emptyState.title);
      expect(content.textContent).toContain(component.emptyState.subtitle);

    });
  });

});
