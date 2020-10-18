import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { FilterComponent } from './components/filter/filter.component';
import { RouterModule } from '@angular/router';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchListItemComponent } from './components/launch-list-item/launch-list-item.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { LazyLoadImageDirective } from './directives/lazy-load-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterOptionsComponent,
    FilterComponent,
    LaunchListComponent,
    LaunchListItemComponent,
    LazyLoadImageDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    TransferHttpCacheModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
