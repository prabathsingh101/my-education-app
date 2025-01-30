import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'todo',
    loadComponent: () =>
      loadRemoteModule('todo', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'school',
    loadComponent: () =>
      loadRemoteModule('school', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'ims',
    loadComponent: () =>
      loadRemoteModule('ims', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'lms',
    loadComponent: () =>
      loadRemoteModule('lms', './Component').then((m) => m.AppComponent),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
