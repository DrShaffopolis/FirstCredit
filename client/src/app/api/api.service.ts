import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  testApiCall(): string {
    return "testing 1 2 3";
  }
}
