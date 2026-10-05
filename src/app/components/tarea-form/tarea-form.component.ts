import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent,
  IonInput, IonTextarea, IonSelect, IonSelectOption, IonNote, ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tarea-form',
  standalone: true,
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.scss'],
  imports: [
    ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
    IonContent, IonInput, IonTextarea, IonSelect, IonSelectOption, IonNote,
  ],
})
export class TareaFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly modalCtrl = inject(ModalController);

  readonly form = this.fb.nonNullable.group({
    titulo: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: ['', [Validators.maxLength(100)]],
    prioridad: ['Media', [Validators.required]],
  });

  get titulo() {
    return this.form.controls.titulo;
  }

  cancelar(): void {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.modalCtrl.dismiss(this.form.getRawValue(), 'confirm');
  }
}
