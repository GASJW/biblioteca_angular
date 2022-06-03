import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () =>
      import('./components/livro/livro.module').then((lm) => lm.LivroModule),
  },
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./components/funcionario/funcionario.module').then(
        (fu) => fu.FuncionarioModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./components/menu/menu.module').then((me) => me.MenuModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
