import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './page/test/test.component';

import { HomeComponent } from './page/home/home.component';
import { PublishComponent } from './page/publish/publish.component';
import { MessageComponent } from './page/message/message.component';
import { MineComponent } from './page/mine/mine.component';
import { LoginComponent } from './page/login/login.component';
import { DetailComponent } from './page/detail/detail.component';
import { AboutComponent } from './page/about/about.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HomeContentComponent } from './page/home/home-content/home-content.component';
import { UserComponent } from './page/user/user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: ':tabName',
        component: HomeContentComponent,
      },
      {
        path: '**',
        redirectTo: 'all',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'publish',
    component: PublishComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'mine',
    component: MineComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user/:username',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
