import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutComponent } from './shared/body/about/about.component';
import { SkillsComponent } from './shared/body/skills/skills.component';
import { EducationComponent } from './shared/body/education/education.component';
import { PostComponent } from './feature/post/post.component';
import { LoginComponent } from './feature/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'articles', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
