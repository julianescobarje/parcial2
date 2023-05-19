import { Component, OnInit } from '@angular/core';
import { Receta } from './receta';
import { RecetaService } from './receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'],
})
export class RecetaComponent implements OnInit {
  recetas: Array<Receta> = [];
  selectedReceta!: Receta;
  selected = false;

  constructor(private recetaService: RecetaService) {}

  getRecetas() {
    this.recetaService
      .getRecetas()
      .subscribe((recetas) => (this.recetas = recetas));
  }

  onSelected(receta: Receta) {
    this.selectedReceta = receta;
    this.selected = true;
  }

  getAverageRating() {
    return (
      this.recetas.reduce((acc, receta) => acc + receta.estrellas, 0) /
      this.recetas.length
    ).toFixed(2);
  }

  getTotalOpinions() {
    return this.recetas.reduce(
      (acc, receta) => acc + receta.cantidadOpiniones,
      0
    );
  }

  ngOnInit() {
    this.getRecetas();
  }
}
