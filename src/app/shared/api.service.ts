import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  employees !: any;
  constructor(private http: HttpClient) { }

  getEmployees() {
    let url = 'http://localhost:8000/employees';
    return this.http.get<any>(url);
  }
  addEmployee() {
    let url = 'http://localhost:8000/employees';
    // return this.http.post();
  }
}
