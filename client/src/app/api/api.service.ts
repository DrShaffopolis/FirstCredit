import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  testApiCall(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("promise delayed"), 2000);
    });
  }
}
