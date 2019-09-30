import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BundeslanderComponent } from './bundeslander/bundeslander.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: BundeslanderComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BundeslanderComponent, PageNotFoundComponent];
