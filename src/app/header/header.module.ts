import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUpComponent } from './header-up/header-up.component';
import { HeaderDownComponent } from './header-down/header-down.component';
import { AccountListComponent } from './header-up/account-list/account-list.component';
import { CartComponent } from './header-up/cart/cart.component';
import { LanguageComponent } from './header-up/language/language.component';
import { LocationComponent } from './header-up/location/location.component';
import { LogoComponent } from './header-up/logo/logo.component';
import { ReturnsComponent } from './header-up/returns/returns.component';
import { SearchBarComponent } from './header-up/search-bar/search-bar.component';
import { LinkComponent } from './header-down/link/link.component';
import { NavComponent } from './header-down/nav/nav.component';

@NgModule({
  declarations: [
    HeaderUpComponent,
    HeaderDownComponent,
    LogoComponent,
    AccountListComponent,
    CartComponent,
    LanguageComponent,
    LocationComponent,
    ReturnsComponent,
    SearchBarComponent,
    LinkComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderDownComponent,
    HeaderUpComponent,
    LogoComponent,
    AccountListComponent,
    CartComponent,
    LanguageComponent,
    LocationComponent,
    ReturnsComponent,
    SearchBarComponent,
    LinkComponent,
    NavComponent

  ]
})
export class HeaderModule { }
