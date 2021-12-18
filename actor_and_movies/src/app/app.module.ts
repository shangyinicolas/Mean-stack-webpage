import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { RouterModule, Routes } from "@angular/router";
import { W10strsubPipe } from './w10strsub.pipe';
import { ListmoviesComponent } from "./listmovies/listmovies.component";
import { DeletemovieComponent } from "./deletemovie/deletemovie.component";
import { AddmovieComponent } from "./addmovie/addmovie.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AddactormovieComponent } from "./addactormovie/addactormovie.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: 'listmovies', component: ListmoviesComponent },
  { path: 'deletemovie', component: DeletemovieComponent },
  { path: 'addmovie', component: AddmovieComponent },
  { path: 'addmovieactor', component: AddactormovieComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    W10strsubPipe,
    AddmovieComponent,
    ListmoviesComponent,
    DeletemovieComponent,
    AddactormovieComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
