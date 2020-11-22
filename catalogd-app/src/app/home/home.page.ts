import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  // itemList: Item[] = []
  itemList: Item[] = [{titulo: "Aaaahhhh", subtitulo: "Lorem ipusum quae dolores sunt"}, {titulo: "Beeeeeh", subtitulo: "Lorem ipusum quae dolores sunt"}]

  addItem(titulo: String) {
    this.itemList.push(
      {titulo: titulo, subtitulo: "Lorem ipusum quae dolores sunt"}
    )
  }

  async addItemPrompt(){
    const alert = await this.alertController.create(
      {
        header: "Novo item",
        inputs: [
          {
            name: "titulo",
            type: "text",
            placeholder: "Nome do item"
          }
        ],
        buttons: [
          {
            text: "Cancelar",
            role: "cancel"
          },
          {
            text: "Confirmar",
            handler: (data) => {
              this.addItem(data.titulo)
            }
          }
        ]
      })
    await alert.present()
  }
}


interface Item {
  titulo: String,
  subtitulo: String
}
