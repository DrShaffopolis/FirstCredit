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
  testApiCall(): string {
    return this.apiService.testApiCall();
  }
}
