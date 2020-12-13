import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    private itemService: ItemService,
    private formBuilder: FormBuilder
    ) { }
  item: Item;
  isEditing: boolean;
  itemForm: FormGroup = this.formBuilder.group({
    title: new FormControl(),
    subtitle: new FormControl()
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getItem(params);
      this.initFormValues();
    });
    this.isEditing = false;
  }

  private getItem(params){
    this.item = this.itemService.getItemById(params.get('id'));
  }

  private initFormValues(){
    this.registerAdditionalFormControls();
    this.initTitleAndSubtitleValues();
  }

  private registerAdditionalFormControls(){
    this.item.additionalFields.forEach(addField => {
      this.itemForm.addControl(addField.name, new FormControl(addField.name));
      this.itemForm.addControl(addField.value, new FormControl(addField.value));
    });
  }

  private initTitleAndSubtitleValues(){
    this.itemForm.patchValue({
      title: this.item.title,
      subtitle: this.item.subtitle
    });
  }

}
