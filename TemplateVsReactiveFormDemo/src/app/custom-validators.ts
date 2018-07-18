import { FormControl } from '@angular/forms';

export class CustomValidators {
    static forbiddenUserNames = ['Chris', 'Anna'];
    static forbiddenNames(control: FormControl) : {[s: string]: boolean} {
      if (CustomValidators.forbiddenUserNames.indexOf(control.value) != -1) {
        return {'forbiddenUserNames': true}
      }
        return null;
    }

    static forbiddenEmailsAsync(control: FormControl): Promise<any> {
      return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === "test@test.com") {
            resolve ({"emailIsForbidden": true});
          } else {
            resolve(null);
          }
        }, 2000);
      });
    }
}
