import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxTabsModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxListModule, IgxAvatarModule, IgxStepperModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxTreeModule, IgxButtonGroupModule, IgxBadgeModule, IgxChipsModule, IgxInputGroupModule, IgxCheckboxModule, IgxRadioModule, IgxSwitchModule, IgcFormsModule, IgxSliderModule, IgxDatePickerModule, IgxSelectModule, IgxSimpleComboModule, IgxCalendarModule, IgxCardModule, IgxGridModule, IgxSnackbarModule, IgxDialogModule, IgxBannerModule } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { AllComponentsComponent } from './all-components.component';

describe('AllComponentsComponent', () => {
  let component: AllComponentsComponent;
  let fixture: ComponentFixture<AllComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComponentsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxTabsModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxListModule, IgxAvatarModule, IgxStepperModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxTreeModule, IgxButtonGroupModule, IgxBadgeModule, IgxChipsModule, IgxInputGroupModule, IgxCheckboxModule, IgxRadioModule, IgxSwitchModule, IgcFormsModule, IgxSliderModule, IgxDatePickerModule, IgxSelectModule, IgxSimpleComboModule, IgxCalendarModule, IgxCardModule, IgxGridModule, IgxSnackbarModule, IgxDialogModule, IgxBannerModule, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
