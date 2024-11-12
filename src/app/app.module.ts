import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCalendarModule, NbContextMenuComponent, NbDatepickerModule, NbWindowModule } from '@nebular/theme'; // Importe o NbDatepickerModule
import { MatDialogModule } from '@angular/material/dialog';

import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbAutocompleteModule,
  NbSelectModule,
  NbSidebarModule,
  NbStepperModule,
  NbThemeModule,
  NbUserModule,
  NbContextMenuModule,
  NbPositionBuilderService,
  NbCheckboxModule,
  NbToastrModule
} from '@nebular/theme';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TextMaskModule } from 'angular2-text-mask';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastrarUsuarioComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, NbEvaIconsModule,
    NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule,NbLayoutModule,NbMenuModule.forRoot(),NbSelectModule,
    NbSidebarModule.forRoot(), NbStepperModule, NbThemeModule.forRoot({ name: 'default' }),NbUserModule,MatTableModule, NbContextMenuModule,
    MatPaginatorModule,NbCheckboxModule,NbDatepickerModule.forRoot(),NbWindowModule.forRoot(),MatTabsModule,MatDialogModule,
    NbContextMenuModule,MatButtonModule,MatMenuModule,MatInputModule,MatFormFieldModule,FormsModule,NbToastrModule.forRoot(),
    MatProgressSpinnerModule, TextMaskModule, NbAutocompleteModule, NbCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
