import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  /**
   * Define el estado del deslizador.
   * **Compatible con ngModel.**
   * 
   * 
   * Ejemplo:
   * 
   *     [(enabled)]="status.cache"
   */
  @Input() enabled = false;
  /**
   * Define el icono que se muestra mientras el deslizador está activado.
   * @example
        <app-switch [activeIcon]="'display'"</app-switch>
   */
  @Input() activeIcon: string = '';
  /**
   * Define el icono que se muestra mientras el deslizador está desactivado.
   * @example
        <app-switch [inactiveIcon]="'display_disconnect'"</app-switch>
   */
  @Input() inactiveIcon: string = '';

  /**
   * Evento de salida del modelo.
   */
  @Output() enabledChange = new EventEmitter();

  constructor() { }

}
