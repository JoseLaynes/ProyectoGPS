import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = 'Técnico'; // O puedes dejar que el usuario elija

  constructor(private authService: AuthService) {}

  register() {
    // Lógica para registrar el usuario (similar al login)
  }
}
