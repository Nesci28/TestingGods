import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgParticlesModule } from 'ng-particles';
import { SidebarModule } from 'ng-sidebar';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/shared/presentation/presentation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UnitTestPresentationComponent } from './components/unit-test/unit-test-presentation/unit-test-presentation.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';
import { SafePipe } from './pipes/safe-html.pipe';
import { ControlsDirective } from './directives/controls.directive';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UnitTestComponent,
    HomeComponent,
    PresentationComponent,
    UnitTestPresentationComponent,
    SafePipe,
    ControlsDirective,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    NgParticlesModule,
    HighlightPlusModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
