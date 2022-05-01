import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template:
  //   `<app-server></app-server>
  //   <hr>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';

  constructor() {
    setInterval(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created Successfully";
  }

}