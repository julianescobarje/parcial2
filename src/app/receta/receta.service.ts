import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from './receta';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  private apiUrl = environment.baseUrl + 'recipes';

  constructor(private http: HttpClient) {}

  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.apiUrl);
  }
}
