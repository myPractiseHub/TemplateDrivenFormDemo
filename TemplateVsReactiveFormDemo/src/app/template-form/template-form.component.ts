import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  isFormSubmitted = false;
  subscriptions= ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(myForm: NgForm) {
    this.isFormSubmitted = true;
    console.log(JSON.stringify(myForm.value));
  }

}
