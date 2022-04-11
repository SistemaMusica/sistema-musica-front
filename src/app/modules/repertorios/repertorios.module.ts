import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { AgregarRepertorioComponent } from './pages/agregar-repertorio/agregar-repertorio.component';
import { SharedModule } from '../../shared/shared.module';
import { ListadoRepertoriosComponent } from './pages/listado-repertorios/listado-repertorios.component';
import { RouterModule } from '@angular/router';
import { RepertorioComponent } from './pages/repertorio/repertorio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

@NgModule({
  declarations: [
    AgregarRepertorioComponent,
    ListadoRepertoriosComponent,
    RepertorioComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    AgregarRepertorioComponent,
    ListadoRepertoriosComponent,
    RepertorioComponent
  ]
})
export class RepertoriosModule { }
