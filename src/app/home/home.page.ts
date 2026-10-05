import { Component, computed, inject } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonList, IonItem,
  IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonBadge, IonCheckbox,
  IonFab, IonFabButton, IonIcon, IonButton, ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, trash } from 'ionicons/icons';
import { Prioridad, Tarea } from '../models/tarea.model';
import { TareasService } from '../services/tareas.service';
import { TareaFormComponent } from '../components/tarea-form/tarea-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonList, IonItem,
    IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonBadge, IonCheckbox,
    IonFab, IonFabButton, IonIcon, IonButton,
  ],
})
export class HomePage {
  private readonly tareasService = inject(TareasService);
  private readonly modalCtrl = inject(ModalController);

  readonly tareas = this.tareasService.tareas;
  readonly pendientes = computed(() => this.tareas().filter((t) => !t.completada).length);

  constructor() {
    addIcons({ add, trash });
  }

  async abrirFormulario(): Promise<void> {
    const modal = await this.modalCtrl.create({ component: TareaFormComponent });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm' && data) {
      this.tareasService.agregar(data);
    }
  }

  cambiarEstado(tarea: Tarea, evento: Event): void {
    const marcada = (evento as CustomEvent).detail.checked as boolean;
    this.tareasService.establecerCompletada(tarea.id, marcada);
  }

  eliminar(id: number): void {
    this.tareasService.eliminar(id);
  }

  colorPrioridad(prioridad: Prioridad): string {
    switch (prioridad) {
      case 'Alta':
        return 'danger';
      case 'Media':
        return 'warning';
      default:
        return 'success';
    }
  }
}
