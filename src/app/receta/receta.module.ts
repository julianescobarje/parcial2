import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RecetaComponent, RecetaDetailComponent],
  exports: [RecetaComponent],
})
export class RecetaModule {}
