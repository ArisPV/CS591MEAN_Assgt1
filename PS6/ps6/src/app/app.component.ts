import { Component, OnInit, Output } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";
import {zipInfo} from './zipInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'PS6';
  info: any = {
    zip: '',
    City: '',
    State: ''
  }
  httpClient: any;
  
  searchZip( ): void {
    const newContact: CONTACT = {
      zip:        this.info.zip,
      City: 	  this.info.City,
      State:      this.info.State,
  };

  constructor(private http: HttpClient ) {

    http.get('http://localhost:3000/ps6/' + this.info.zip.toString())
      .subscribe(
        data => this.info = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );
    this.httpClient = http;
    //this.subListMessage = "This is not a message";

  }

  ngOnInit() {
      this.httpClient.get('http://localhost:3000/ps6/' + this.info.zip.toString())
        .subscribe(
          data => this.info = data,
          err => console.log(`Error: ${err}`),
          () => console.log(`Completed request`)
        );
  }

  postData() {
    this.httpClient.post()
  }
}
