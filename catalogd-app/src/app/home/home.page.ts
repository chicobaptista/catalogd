import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  itemList: Item[] = [{titulo: "Nana", subtitulo:"Whats my name"}]

  async addItemPrompt(){
    const alert = await this.alertController.create(
      {
        header: "Novo item",
        inputs: [
          {
            name: "titulo",
            type: "text",
            placeholder: "Nome do item",
            attributes: {
              required: true
            }
          },
          {
            name: "subtitulo",
            type: "textarea",
            placeholder: "Descrição do item"
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
              this.addItem(data.titulo, data.subtitulo)
            }
          }
        ]
      })
    await alert.present()
  }

  addItem(titulo: String, subtitulo: String) {
    this.itemList.push(
      {titulo, subtitulo}
    )
  }

  async deleteItemPrompt(index: number){
    const alert = await this.alertController.create(
      {
        header: "Apagar item",
        subHeader: "Você tem certeza disso?!?!",
        buttons: [
          {
            text: "Melhor não...",
            role: "cancel"
          },
          {
            text: "Lol, YOLO!",
            handler: (data) => {
              this.deleteItem(index)
            }
          }
        ]
      })
    await alert.present()
  }

  deleteItem(index: number){
    this.itemList.splice(index, 1)
  }


  async editItemPrompt(index: number) {
    const alert = await this.alertController.create(
      {
        header: "Novo item",
        inputs: [
          {
            name: "titulo",
            type: "text",
            placeholder: "Nome do item",
            attributes: {
              required: true
            }
          },
          {
            name: "subtitulo",
            type: "textarea",
            placeholder: "Descrição do item"
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
              this.editItem(index, {titulo: data.titulo as String, subtitulo: data.subtitulo as String})
            }
          }
        ]
      })
    await alert.present()
  }

  editItem(index: number, item: Item){
    this.itemList[index] = item

  }

}


interface Item {
  titulo: String,
  subtitulo: String
}
