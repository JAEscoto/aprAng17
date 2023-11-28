import { OperativeSystem } from './../../interfaces/operative-systems';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OperativeSystemService } from '../../core/operative-system.service';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // variable: tipo = lo que sea
  username: string = 'Juan';

  userExist: boolean = true;

  operativeSystemService: OperativeSystemService = inject(
    OperativeSystemService
  );

  operativeSystem: OperativeSystem[] =
    this.operativeSystemService.getOperativeSystems();

  isEditable: boolean = true;

  onMouseOver(osName: string) {
    console.log(osName);
  }

  @Input() ocupation: string = '';

  @Output() greet = new EventEmitter<string>();

  emitToParent() {
    this.greet.emit('Hola muy buenas padre');
  }
}
