import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  constructor(private apiService: ApiService) { };
  title = 'app';
  testApiCallResult: string = "testing promise not done";
  testApiCall(): void {
    this.apiService.testApiCall().then(x => this.testApiCallResult = x);
  }
  ngOnInit(): void {
    this.testApiCall();
  }
}
