import { FooterComponent } from './shared/footer/footer.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SmallheaderComponent } from './smallheader/smallheader/smallheader.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'services',component:OurServicesComponent},
  {path:'معرض-الاعمال', component:GallaryComponent},
  {path:'من-نحن', component:AboutUsComponent},
  {path : 'smallheader', component:SmallheaderComponent },
  {path :'contact', component:ContactUsComponent},
  {path: 'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
