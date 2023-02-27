import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private readonly spinner: NgxSpinnerService
  ) { }

  ionViewDidEnter() {
    this.spinner.hide('appSpinner');
  }
}
