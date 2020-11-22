import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  // itemList: Item[] = []
  itemList: Item[] = [{titulo: "Aaaahhhh", subtitulo: "Lorem ipusum quae dolores sunt"}, {titulo: "Beeeeeh", subtitulo: "Lorem ipusum quae dolores sunt"}]

  addItem() {
    this.itemList.push(
      {titulo: "Ceeeehhhh", subtitulo: "Lorem ipusum quae dolores sunt"}
    )
  }
}


interface Item {
  titulo: String,
  subtitulo: String
}
