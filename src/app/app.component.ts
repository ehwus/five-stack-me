import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message: String = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://localhost:4201/api/test')
      .subscribe((response: any) => {
        this.message = response.data;
      });
  }
}
