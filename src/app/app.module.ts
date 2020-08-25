import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, MenuComponent, GameComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
