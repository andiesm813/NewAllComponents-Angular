import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { IgxTabsModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxListModule, IgxAvatarModule, IgxStepperModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxTreeModule, IgxButtonGroupModule, IgxBadgeModule, IgxChipsModule, IgxInputGroupModule, IgxCheckboxModule, IgxRadioModule, IgxSwitchModule, IgcFormsModule, IgxSliderModule, IgxDatePickerModule, IgxSelectModule, IgxSimpleComboModule, IgxCalendarModule, IgxCardModule, IgxGridModule, IgxSnackbarModule, IgxDialogModule, IgxBannerModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { View3Component } from './view3/view3.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View3Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    IgxIconModule,
    IgxAccordionModule,
    IgxExpansionPanelModule,
    IgxListModule,
    IgxAvatarModule,
    IgxStepperModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxTreeModule,
    IgxButtonGroupModule,
    IgxBadgeModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxRadioModule,
    IgxSwitchModule,
    IgcFormsModule,
    IgxSliderModule,
    IgxDatePickerModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    IgxCalendarModule,
    IgxCardModule,
    IgxCategoryChartModule,
    IgxGridModule,
    IgxSnackbarModule,
    IgxDialogModule,
    IgxBannerModule,
    FormsModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
