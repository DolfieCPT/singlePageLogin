import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LoginPageComponent} from './loginpage/loginpage.component';
import { LandingPageComponent } from './landingpage/landingpage.component';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,
  MatButtonToggleModule, MatCardModule, MatButtonModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';

const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'landingpage', component: LandingPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

    BrowserAnimationsModule,
    CdkTableModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    LayoutModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    RouterModule,
    // CDk
    CdkTableModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
