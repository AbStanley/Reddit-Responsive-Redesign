import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OngoingProjectComponent } from './ongoing-project/ongoing-project.component';
import { AsideComponent } from './aside/aside.component';
import { ProjectComponent } from './project/project.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicLogComponent } from './dynamic-log/dynamic-log.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    OngoingProjectComponent,
    AsideComponent,
    ProjectComponent,
    DynamicComponent,
    DynamicLogComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
