import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { CoreModule } from './core.module';
import { AppComponent } from './app.component';
import * as fromAppStore from './store/app.reducers';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './auth/store/auth.effects';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { RecipeEffects } from './recipes/store/recipe.effects';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromAppStore.appReducer),
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    // app modules
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  // entryComponents: [
  //   AlertComponent
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
