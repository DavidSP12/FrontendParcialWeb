import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinica } from '../models/clinica';

@Injectable({
  providedIn: 'root',
})
export class ClinicaService {
  private apiUrl = 'http://localhost:8080/api/clinicas';

  constructor(private http: HttpClient) { }

  getClinicas(): Observable<Clinica[]> {
    return this.http.get<Clinica[]>(this.apiUrl);
  }

  getClinicaById(id: number): Observable<Clinica> {
    return this.http.get<Clinica>(`${this.apiUrl}/${id}`);
  }

  createClinica(clinica: Clinica): Observable<Clinica> {
    return this.http.post<Clinica>(this.apiUrl, clinica);
  }

  updateClinica(id: number, clinica: Clinica): Observable<Clinica> {
    return this.http.put<Clinica>(`${this.apiUrl}/${id}`, clinica);
  }

  deleteClinica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
