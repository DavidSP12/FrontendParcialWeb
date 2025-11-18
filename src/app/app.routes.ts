import { Routes } from '@angular/router';
import { ClinicaList } from './components/clinica-list/clinica-list';
import { ClinicaForm } from './components/clinica-form/clinica-form';

export const routes: Routes = [
  { path: '', redirectTo: '/clinicas', pathMatch: 'full' },
  { path: 'clinicas', component: ClinicaList },
  { path: 'nueva-clinica', component: ClinicaForm }
];
