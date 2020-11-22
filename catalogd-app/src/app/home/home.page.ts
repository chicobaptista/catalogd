import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  itemList: Item[] = [{titulo: "Aaaahhhh", subtitulo: "Lorem ipusun quae dolores sunt"}, {titulo: "Beeeeeh", subtitulo: "Lorem ipusun quae dolores sunt"}]

}


interface Item {
  titulo: String,
  subtitulo: String
}
