import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
    ) { }
  item: Item;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = this.itemService.getItemById(params.get('id'));
    });
  }

}
