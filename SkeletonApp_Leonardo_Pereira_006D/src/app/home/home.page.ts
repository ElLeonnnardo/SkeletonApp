import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  userData: any; 
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';
  limpiarAnimation = false;
  selectedDate: Date | undefined;

  constructor(
    private userDataService: UserDataService,
    private toastController: ToastController
  ) {
    this.userData = this.userDataService.getUserData();
  }

  limpiarCampos() {
    this.limpiarAnimation = true; // Activar la animación
    setTimeout(() => {
      this.nombre = '';
      this.apellido = '';
      this.limpiarAnimation = false; // Desactivar la animación después de 1 segundo
    }, 1000);
  }

  

  async mostrarInfo() {
    const mensaje = `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nNivelEducacion: ${this.nivelEducacion}\nFechaNacimiento${this.fechaNacimiento}`;
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: 'top',
      buttons: [
        {
          side: 'end',
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}

/* export class DatepickerOverviewExample {} */

