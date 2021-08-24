import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Pages
import { ProjectsComponent } from './pages/projects/projects.component';

// Components
import { SocialsComponent } from './components/socials/socials.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		ProjectsComponent,
		HomeComponent,
		SocialsComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
