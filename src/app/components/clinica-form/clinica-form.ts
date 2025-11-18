import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClinicaService } from '../../services/clinica';
import { Clinica } from '../../models/clinica';

@Component({
  selector: 'app-clinica-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './clinica-form.html',
  styleUrl: './clinica-form.css',
})
export class ClinicaForm {
  clinica: Clinica = {
    nombre: '',
    direccion: '',
    cantidadCamas: 1,
    telefono: '',
    ciudad: ''
  };

  error = signal<string>('');
  success = signal<string>('');

  constructor(
    private clinicaService: ClinicaService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.error.set('');
    this.success.set('');

    this.clinicaService.createClinica(this.clinica).subscribe({
      next: (response) => {
        this.success.set('Clínica creada exitosamente');
        setTimeout(() => {
          this.router.navigate(['/clinicas']);
        }, 1500);
      },
      error: (err) => {
        this.error.set('Error al crear la clínica');
        console.error(err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clinicas']);
  }
}
