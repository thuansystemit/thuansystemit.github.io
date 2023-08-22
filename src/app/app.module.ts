import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './shared/components/navbar-top/navbar-top.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarBottomComponent } from './shared/components/navbar-bottom/navbar-bottom.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SkillsComponent } from './shared/body/skills/skills.component';
import { ProjectsComponent } from './shared/body/projects/projects.component';
import { AboutComponent } from './shared/body/about/about.component';
import { LoginComponent } from './feature/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormlyModule} from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { PostComponent } from './feature/post/post.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarBottomComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyBootstrapModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
