import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { ProjetosSociais } from './pages/projetos-sociais/projetos-sociais';
import { PostDetalhe } from './pages/post-detalhe/post-detalhe';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: Sobre },
  { path: 'projetos-sociais', component: ProjetosSociais },
  { path: 'noticia/:id', component: PostDetalhe }
];
