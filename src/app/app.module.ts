import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchBrComponent } from './shared/search-br/search-br.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { GallaryComponent } from './gallary/gallary.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SmallheaderComponent } from './smallheader/smallheader/smallheader.component';
import { OurWorkComponent } from './our-work/our-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchBrComponent,
    NavbarComponent,
    LayoutComponent,
    AboutUsComponent,
    SmallheaderComponent,
    OurWorkComponent,
    ContactUsComponent,
    GallaryComponent,
    OurServicesComponent,
  ],
  imports: [
    BrowserModule,
    NgxNavbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
