import {ComponentCanDeac} from './guards/component-canDeac';
import {NgForm} from '@angular/forms';

export abstract class FormComponent extends ComponentCanDeac{

  abstract get form():NgForm;

  canDeactivate():boolean{
    return this.form.submitted || !this.form.dirty
  }

}
