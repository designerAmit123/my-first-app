import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

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
  serverName = '';

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

  onUpdateServerName(event: any){
    // console.log(event);
    this.serverName = event.target.value;
  }

}
