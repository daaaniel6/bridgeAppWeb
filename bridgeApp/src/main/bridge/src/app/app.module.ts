import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';

// primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

// sirve para el ng-tamplate
import { MessageService, SharedModule } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
// sirve para el meni del usuario
import { RippleModule } from 'primeng/ripple';
//mensaejes
import { ToastModule } from 'primeng/toast';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page404Component } from './pages/page404/page404.component';
import { CarouselComponent } from './components/carousel/carousel.component';
//carousel
import { CarouselModule } from 'primeng/carousel';

import { EditRegisterComponent } from './pages/edit-register/edit-register.component';
import { DeleteRegisterComponent } from './pages/delete-register/delete-register.component';

//charts
// import { ChartsModule } from 'ng2-charts';
// import { ChartModule } from 'primeng/chart';
// import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PieChartComponent } from './components/pie-chart/pie-chart.component';

// dialogos
import { DialogModule } from 'primeng/dialog';

//tablas
import { TableModule } from 'primeng/table';
import { BridgeSelectedComponent } from './pages/bridge-selected/bridge-selected.component';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { InformationTableComponent } from './components/information-table/information-table.component';

// inputtext
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

import { DropdownModule } from 'primeng/dropdown';
import { GeneralTableComponent } from './components/general-table/general-table.component';

//calendar
import { CalendarModule } from 'primeng/calendar';
import { TramoTableComponent } from './components/tramo-table/tramo-table.component';
import { EntradaTableComponent } from './components/entrada-table/entrada-table.component';
import { SalidaTableComponent } from './components/salida-table/salida-table.component';
import { PilasTableComponent } from './components/pilas-table/pilas-table.component';
import { SuperTableComponent } from './components/super-table/super-table.component';
import { ElementosTableComponent } from './components/elementos-table/elementos-table.component';
import { CauceTableComponent } from './components/cauce-table/cauce-table.component';
import { OtrosTableComponent } from './components/otros-table/otros-table.component';

//imagenes
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InfoBoxesComponent } from './components/info-boxes/info-boxes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

//Login
import { LoginComponent } from './auth/login.component';

//not external
import { interceptorProvider } from './interceptors/prod-interceptor.service';

//Services
import { LoadScriptsService } from './services/load-scripts.service';
import { SendEmailComponent } from './pages/changePassword/send-email/send-email.component';
import { ChangePasswordComponent } from './pages/changePassword/change-password/change-password.component';
import { ToastService } from './services/notifications/toast.service';
import { NewBridgeComponent } from './pages/bridge/new-bridge/new-bridge.component';
import { UpdateBridgeComponent } from './pages/bridge/update-bridge/update-bridge.component';
import { NewRegisterComponent } from './pages/bridge/new-register/new-register.component';
import { BridgeComunicationService } from './services/comunication/bridge-comunication.service';
import { StretchRowComponent } from './components/stretch-row/stretch-row.component';
import { RowWidthRowComponent } from './components/row-width-row/row-width-row.component';
import { ScourComponent } from './components/scour/scour.component';
import { SupportComponent } from './components/support/support.component';
import { ConcreteRowComponent } from './components/super-table/concrete-row/concrete-row.component';
import { SteelRowComponent } from './components/super-table/steel-row/steel-row.component';
import { SewerSystemComponent } from './components/super-table/sewer-system/sewer-system.component';
import { BearingSlabComponent } from './components/super-table/bearing-slab/bearing-slab.component';
import { CouncilComponent } from './components/elementos-table/council/council.component';
import { BarrierComponent } from './components/elementos-table/barrier/barrier.component';
import { ProtectionWorksComponent } from './components/elementos-table/protection-works/protection-works.component';
import { SlabAccessComponent } from './components/elementos-table/slab-access/slab-access.component';
import { HandrailRailingComponent } from './components/elementos-table/handrail-railing/handrail-railing.component';
import { RailingPostsComponent } from './components/elementos-table/railing-posts/railing-posts.component';
import { ExistingBridgesComponent } from './pages/bridge/existing-bridges/existing-bridges.component';
import { ImageComponent } from './pages/image/image.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterTableComponent } from './pages/bridge/register-table/register-table.component';
import { ForumComponent } from './pages/forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    DashboardComponent,
    Page404Component,
    CarouselComponent,
    EditRegisterComponent,
    DeleteRegisterComponent,
    BarChartComponent,
    PieChartComponent,
    BridgeSelectedComponent,
    InformationTableComponent,
    GeneralTableComponent,
    TramoTableComponent,
    EntradaTableComponent,
    SalidaTableComponent,
    PilasTableComponent,
    SuperTableComponent,
    ElementosTableComponent,
    CauceTableComponent,
    OtrosTableComponent,
    SidebarComponent,
    NavbarComponent,
    PageHeaderComponent,
    InfoBoxesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SendEmailComponent,
    ChangePasswordComponent,
    NewBridgeComponent,
    UpdateBridgeComponent,
    NewRegisterComponent,
    StretchRowComponent,
    RowWidthRowComponent,
    ScourComponent,
    SupportComponent,
    ConcreteRowComponent,
    SteelRowComponent,
    SewerSystemComponent,
    BearingSlabComponent,
    CouncilComponent,
    BarrierComponent,
    ProtectionWorksComponent,
    SlabAccessComponent,
    HandrailRailingComponent,
    RailingPostsComponent,
    ExistingBridgesComponent,
    ImageComponent,
    GalleryComponent,
    RegisterTableComponent,
    ForumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    RippleModule,
    MessagesModule,
    MessageModule,
    CarouselModule,
    ToastModule,
    NgxChartsModule,
    DialogModule,
    TableModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [NgxChartsModule],
  providers: [
    interceptorProvider,
    LoadScriptsService,
    ToastService,
    MessageService,
    BridgeComunicationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
