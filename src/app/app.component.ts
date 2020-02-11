import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      test: [null, [Validators.required, Validators.minLength(10)]]
    });
  }

  get test() {
    return this.form.get("test");
  }
}
