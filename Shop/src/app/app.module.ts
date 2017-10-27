import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AnimalService } from './services/animal.service';
import { ItemComponent } from './item/item.component';
const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'shop',
    component: ItemListComponent
  },
  // { path: '**',
  //   redirectTo: '/shop',
  //   pathMatch: 'full'
  // },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ImagesComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
