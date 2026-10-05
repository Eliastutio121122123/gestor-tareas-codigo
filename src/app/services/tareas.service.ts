import { Injectable, signal } from '@angular/core';
import { Prioridad, Tarea } from '../models/tarea.model';

const CLAVE_STORAGE = 'tareas';

@Injectable({ providedIn: 'root' })
export class TareasService {
  private readonly _tareas = signal<Tarea[]>(this.cargar());

  /** Lista de tareas (solo lectura para los componentes). */
  readonly tareas = this._tareas.asReadonly();

  agregar(datos: { titulo: string; descripcion: string; prioridad: Prioridad }): void {
    const nueva: Tarea = {
      id: Date.now(),
      titulo: datos.titulo.trim(),
      descripcion: datos.descripcion.trim(),
      prioridad: datos.prioridad,
      completada: false,
    };
    this.actualizar([nueva, ...this._tareas()]);
  }

  establecerCompletada(id: number, completada: boolean): void {
    this.actualizar(
      this._tareas().map((t) => (t.id === id ? { ...t, completada } : t))
    );
  }

  eliminar(id: number): void {
    this.actualizar(this._tareas().filter((t) => t.id !== id));
  }

  private actualizar(tareas: Tarea[]): void {
    this._tareas.set(tareas);
    this.guardar(tareas);
  }

  private guardar(tareas: Tarea[]): void {
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    } catch (error) {
      console.error('No se pudo guardar en localStorage', error);
    }
  }

  private cargar(): Tarea[] {
    try {
      const texto = localStorage.getItem(CLAVE_STORAGE);
      const datos = texto ? JSON.parse(texto) : [];
      return Array.isArray(datos) ? datos : [];
    } catch {
      return [];
    }
  }
}
