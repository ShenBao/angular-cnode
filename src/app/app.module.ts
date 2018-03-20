import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TestComponent } from './page/test/test.component';

import { HomeComponent } from './page/home/home.component';
import { PublishComponent } from './page/publish/publish.component';
import { MessageComponent } from './page/message/message.component';
import { MineComponent } from './page/mine/mine.component';
import { LoginComponent } from './page/login/login.component';
import { DetailComponent } from './page/detail/detail.component';
import { AboutComponent } from './page/about/about.component';

import { NotFoundComponent } from './page/not-found/not-found.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { GoBackComponent } from './components/go-back/go-back.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { TabsComponent } from './page/home/tabs/tabs.component';
import { ContentComponent } from './components/content/content.component';
import { ItemComponent } from './page/home/item/item.component';
import { DataNullComponent } from './components/data-null/data-null.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DetailContentComponent } from './page/detail/detail-content/detail-content.component';
import { HomeContentComponent } from './page/home/home-content/home-content.component';
import { IntervalTimePipe } from './pipe/interval-time/interval-time.pipe';
import { UserComponent } from './page/user/user.component';
import { TopicsListComponent } from './page/user/topics-list/topics-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublishComponent,
    MessageComponent,
    MineComponent,
    LoginComponent,
    DetailComponent,
    AboutComponent,
    NotFoundComponent,
    TestComponent,
    NavbarComponent,
    HeaderComponent,
    GoBackComponent,
    SignOutComponent,
    TabsComponent,
    ContentComponent,
    ItemComponent,
    DataNullComponent,
    LoadingComponent,
    DetailContentComponent,
    HomeContentComponent,
    IntervalTimePipe,
    UserComponent,
    TopicsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { // 开启基于Hash的路由模式
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      // useValue: environment.APP_BASE_HREF
      useValue: '/'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
