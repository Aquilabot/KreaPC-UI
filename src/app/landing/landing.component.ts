import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  promptForm = new FormGroup({
    prompt: new FormControl('', Validators.required),
    enableOptions: new FormControl(false, Validators.required),
    gaming: new FormControl(""),
    officeOrSchool: new FormControl("")
  })

  createPcBuild(){
    //send prompt form
  }

}
