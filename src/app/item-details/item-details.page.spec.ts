import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRouteStub } from 'src/testing/activated-route.stub';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

import { ItemDetailsPage } from './item-details.page';

describe('ItemDetailsPage', () => {
  let component: ItemDetailsPage;
  let fixture: ComponentFixture<ItemDetailsPage>;
  const activatedRoute: ActivatedRouteStub = new ActivatedRouteStub();
  let itemServiceStub: Partial<ItemService>;
  const itemId = '1';

  beforeEach(async(() => {
    activatedRoute.setParamMap({id: itemId});
    itemServiceStub = {
      getItemById(id: string): Item{
        return { id: itemId, title: 'test1', subtitle: 'testing title' };
      }
    };
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: ItemService, useValue: itemServiceStub}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ItemDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load the item by the id on the router', () => {
    expect(component.item.id).toEqual(itemId);
    expect(component.item).toEqual(itemServiceStub.getItemById(itemId));
  });
});
