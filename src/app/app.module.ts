import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { PageComponent } from './page/page.component';
import { PageService } from './page/page.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuLivreComponent } from './menu-livre/menu-livre.component';
import { LivreMenuComponent } from './livre-menu/livre-menu.component';
import { LivreMenuService } from './livre-menu/livre-menu.service';
import { CollectionMenuComponent } from './collection-menu/collection-menu.component';
import { CollectionMenuService } from './collection-menu/collection-menu.service';

const appRoutes : Routes = [
  { path: 'collection-menu', component : CollectionMenuComponent },
  { path: 'livre-menu/:collection', component : LivreMenuComponent },
  { path: 'page/:livre', component : PageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    PageComponent,
    MenuLivreComponent,
    LivreMenuComponent,
    CollectionMenuComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [PageService, LivreMenuService, CollectionMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
