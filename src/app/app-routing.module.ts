import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent} from './shared/body/skills/skills.component';
import { ProjectsComponent} from './shared/body/projects/projects.component';
import { AboutComponent} from './shared/body/about/about.component';
import { LoginComponent} from './feature/login/login.component';
import { PostComponent } from './feature/post/post.component';

const routes: Routes = [
  { path: 'home', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: '**', component: ErrorComponent }
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
