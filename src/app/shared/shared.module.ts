import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertorioTarjetaComponent } from './components/repertorio-tarjeta/repertorio-tarjeta.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { UsuarioTarjetaComponent } from './components/usuario-tarjeta/usuario-tarjeta.component';
import { CancionTarjetaComponent } from './components/cancion-tarjeta/cancion-tarjeta.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IntegranteTarjetaComponent } from './components/integrante-tarjeta/integrante-tarjeta.component';
import { CompartidoTarjetaComponent } from './components/compartido-tarjeta/compartido-tarjeta.component';


@NgModule({
  declarations: [
    RepertorioTarjetaComponent,
    HeaderComponent,
    SideBarComponent,
    ConfirmarComponent,
    UsuarioTarjetaComponent,
    CancionTarjetaComponent,
    IntegranteTarjetaComponent,
    CompartidoTarjetaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    RepertorioTarjetaComponent,
    HeaderComponent,
    SideBarComponent,
    UsuarioTarjetaComponent,
    CancionTarjetaComponent,
    FlexLayoutModule,
    IntegranteTarjetaComponent,
    CompartidoTarjetaComponent,
  ]
})
export class SharedModule { }
