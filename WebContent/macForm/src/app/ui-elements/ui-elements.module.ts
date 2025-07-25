import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabulatorTableComponent} from './tabulator-table/tabulator-table.component';
//https://github.com/search?q=repo%3AToxygates%2FPanomicon%20tabulator-table&type=code
//import { AgGridModule } from "ag-grid-angular/main";
//import {UIAgGridComponent} from './simple-ag-grid/simple-ag-grid.component';
//import {LoaderComponent} from './loader/loader.component';
// modules
//import {AlertModule} from 'ngx-bootstrap';
//import {BsDatepickerModule} from 'ngx-bootstrap';

// components
//import {MessagesValidationComponent} from './messages-validation/messages-validation';
//import {UIInputComponent} from './ui-input/ui-input';
//import {UISelectComponent} from './ui-select/ui-select';
//import {UIReviewComponent} from './ui-review/ui-review';
//import {UINumberPickerComponent} from './ui-number-picker/ui-number-picker';
//import {UIDatePickerComponent} from './ui-datepicker/ui-datepicker.component';
//import {UIPasswordComponent} from './ui-password/ui-password';

// directives
/*import {HexadecimalValidatorDirective} from './directives/hexadecimal.directive';
import {NumericValidatorDirective} from './directives/numeric.directive';
import {DateValidatorDirective} from './directives/date.directive';
import {EmailValidatorDirective} from './directives/email.directive';
import {MaxDateTodayValidatorDirective} from './directives/maxDateToday.directive';
import {PasswordValidatorDirective} from './directives/password-valid.directive';
import {FocusDirective} from './directives/focus.directive';
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
	
	//AgGridModule.withComponents([])
    //AlertModule.forRoot(),
    //BsDatepickerModule.forRoot()
  ],
  declarations: [
  	TabulatorTableComponent,
	//LoaderComponent
    //UIInputComponent,
   // UINumberPickerComponent,
    //UISelectComponent,
   // UIReviewComponent,
   // UIDatePickerComponent,
   // UIPasswordComponent,
   // MessagesValidationComponent,
   /* HexadecimalValidatorDirective,
    NumericValidatorDirective,
    DateValidatorDirective,
    EmailValidatorDirective,
    MaxDateTodayValidatorDirective,
    PasswordValidatorDirective,
    FocusDirective*/
  ],
  providers: [],
  exports: [
  TabulatorTableComponent
  //	UIAgGridComponent,
	//LoaderComponent
   /* UIInputComponent,
    UISelectComponent,
    UINumberPickerComponent,
    UIReviewComponent,
    UIDatePickerComponent,
    UIPasswordComponent,
    MessagesValidationComponent,
    HexadecimalValidatorDirective,
    NumericValidatorDirective,
    DateValidatorDirective,
    EmailValidatorDirective,
    MaxDateTodayValidatorDirective,
    PasswordValidatorDirective*/
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UIElementsModule {
}