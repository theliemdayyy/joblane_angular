import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignIn1Component } from './pages/sign-in-1/sign-in-1.component';
import { SignIn2Component } from './pages/sign-in-2/sign-in-2.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { JobPostDetailComponent } from './pages/job-post-detail/job-post-detail.component';
import {PersonalJobSeekerComponent} from './pages/personal-jobseeker/personal-jobseeker.component';
import {PersonalEmployerComponent} from './pages/personal-employer/personal-employer.component';
import { PostNewJobComponent } from './pages/post-new-job/post-new-job.component';
import { JobCategoriesComponent } from './pages/job-categories/job-categories.component';
import { ApplyCVComponent } from './pages/apply-cv/apply-cv.component';


export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
  { path: 'sign-in-1', component: SignIn1Component, pathMatch:'full'},
  { path: 'sign-in-2', component: SignIn2Component, pathMatch:'full'},
  { path: 'forget-password', component: ForgetPasswordComponent, pathMatch:'full'},
  { path: 'search-result', component: SearchResultsComponent, pathMatch:'full'},
  { path: 'job-post', component: JobPostDetailComponent, pathMatch:'full'},
  { path: 'personal-jobseeker', component: PersonalJobSeekerComponent, pathMatch:'full'},
  { path: 'personal-employer', component: PersonalEmployerComponent , pathMatch:'full'},
  { path: 'post-new-job', component: PostNewJobComponent, pathMatch:'full'},
  { path: 'categories', component: JobCategoriesComponent, pathMatch:'full'},
  { path: 'apply-cv', component: ApplyCVComponent, pathMatch:'full'}



];
