import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClinicaService } from '../../services/clinica';
import { Clinica } from '../../models/clinica';

@Component({
  selector: 'app-clinica-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './clinica-list.html',
  styleUrl: './clinica-list.css',
})
export class ClinicaList implements OnInit {
  clinicas = signal<Clinica[]>([]);
  loading = signal<boolean>(false);
  error = signal<string>('');

  constructor(private clinicaService: ClinicaService) {}

  ngOnInit(): void {
    this.loadClinicas();
  }

  loadClinicas(): void {
    this.loading.set(true);
    this.error.set('');
    this.clinicaService.getClinicas().subscribe({
      next: (data) => {
        this.clinicas.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las clínicas');
        this.loading.set(false);
        console.error(err);
      }
    });
  }

  deleteClinica(id: number | undefined): void {
    if (!id) return;
    if (confirm('¿Está seguro de eliminar esta clínica?')) {
      this.clinicaService.deleteClinica(id).subscribe({
        next: () => {
          this.loadClinicas();
        },
        error: (err) => {
          this.error.set('Error al eliminar la clínica');
          console.error(err);
        }
      });
    }
  }
}
