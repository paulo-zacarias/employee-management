import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material. module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ConfirmationDialog,
  EmployeeListComponent,
} from './employee/employee-list/employee-list.component';
import { OfficeListComponent } from './office/office-list.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { EmployeeTagsComponent } from './employee/employee-tags/employee-tags.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { LayoutComponent } from './core/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    OfficeListComponent,
    EmployeeFormComponent,
    EmployeeTagsComponent,
    EmployeeEditComponent,
    ConfirmationDialog,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
