import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { CandidatComponent } from './candidat/candidat.component';
import { RecretureComponent } from './recreture/recreture.component';
import { ClubComponent } from './club/club.component';
import { PropritaireComponent } from './propritaire/propritaire.component';
import { ProposComponent } from './propos/propos.component';
import { CComponent } from './c/c.component';
import { OffreComponent } from './offre/offre.component';
import { EventComponent } from './event/event.component';
import { CowComponent } from './cow/cow.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { DetailcowComponent } from './detailcow/detailcow.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { ReservationComponent } from './reservation/reservation.component';


import { RComponent } from './r/r.component';
import { ActualiteRComponent } from './actualite-r/actualite-r.component';
import { OffreRComponent } from './offre-r/offre-r.component';
import { EventRComponent } from './event-r/event-r.component';
import { CoworkingRComponent } from './coworking-r/coworking-r.component';
import { NotificationRComponent } from './notification-r/notification-r.component';
import { DetailcoworkingRComponent } from './detailcoworking-r/detailcoworking-r.component';
import { NotificationComponent } from './notification/notification.component';
import { CandidaturesCComponent } from './candidatures-c/candidatures-c.component';
import { CandidaturesRComponent } from './candidatures-r/candidatures-r.component';
import { FicheCComponent } from './fiche-c/fiche-c.component';
import { ListeComponent } from './liste/liste.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path :"home",component:HomeComponent},
  {path :"login",component:LoginComponent},
  {path :"inscrit",component:InscritComponent},
  {path :"candidat",component:CandidatComponent},
  {path :"recreture",component:RecretureComponent},
  {path :"club",component:ClubComponent},
  {path :"propritaire",component:PropritaireComponent},
  {path :"propos",component:ProposComponent},
  {path :"c",component:CComponent},
  {path :"offre",component:OffreComponent},
  {path :"event",component:EventComponent},
  {path :"cow",component:CowComponent},
  {path :"actualite",component:ActualiteComponent},
  {path :"detailcow",component:DetailcowComponent},
  {path :"detailoffre",component:DetailoffreComponent},
  {path :"reservation",component:ReservationComponent},
 
  {path :"r",component:RComponent},
  {path :"actualiteR",component:ActualiteRComponent},
  {path :"offreR",component:OffreRComponent},
  {path :"eventR",component:EventRComponent},
  {path :"coworkingR",component:CoworkingRComponent},
  {path :"notificationR",component:NotificationRComponent},
  {path :"detailcoworkingR",component:DetailcoworkingRComponent},
  {path :"notification",component:NotificationComponent},
  {path :"candidaturesR",component:CandidaturesRComponent},

  {path :"candidaturesC",component:CandidaturesCComponent},
  {path :"ficheC",component:FicheCComponent},
  {path :"liste",component:ListeComponent},
  {path :"welcome",component:WelcomeComponent},
  {path :"question",component:QuestionComponent},

  {path :"test",component:TestComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {  }
