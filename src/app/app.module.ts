import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { FriendsPage } from '../pages/friends/friends';
import { HowToUsePage } from '../pages/howtouse/howtouse';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FriendsPage,
    HomePage,
    HowToUsePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FriendsPage,
    HowToUsePage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
