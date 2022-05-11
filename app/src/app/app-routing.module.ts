import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeFormGuard } from './guards/employee-form.guard';
import { OfficeListComponent } from './office/office-list.component';
import { EmployeeResolver } from './resolvers/employee.resolver';
import { OfficeListResolver } from './resolvers/office-list.resolver';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  {
    path: 'employees/:id/edit',
    component: EmployeeEditComponent,
    resolve: { employee: EmployeeResolver, offices: OfficeListResolver },
    canDeactivate: [EmployeeFormGuard],
  },
  { path: 'offices', component: OfficeListComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
