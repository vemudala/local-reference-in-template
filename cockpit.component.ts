import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.Emulated  
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string, serverContent:string}>();  //event emiter is obj to emit evnts
  @Output() blueprintCreated=new EventEmitter<{serverName:string, serverContent:string}>(); 
  //above propterties are created ie from cockpit decorator in app componet events
  // newServerName:string=""; //1 removed bcz we are given reference to input not ngmodel binding
  newServerContent:string="";
  constructor() { }

  ngOnInit() {
  }
  onAddServer(lid:HTMLInputElement){
    // console.log(lid)
    this.serverCreated.emit({
      // serverName:this.newServerName, // here also removed and ref 
      serverName:lid.value,
      serverContent:this.newServerContent
    })
    // this.dataa.push({ 
    //   name:this.newServerName,
    //   desc:this.newServerContent,
    //   type:"server"
    // });

  }
  onAddBluprint(lid:HTMLInputElement){
    this.blueprintCreated.emit({
      // serverName:this.newServerName,
      serverName:lid.value,
      serverContent:this.newServerContent
    })
    // this.dataa.push({
    //   type:'blue',
    //   name:this.newServerName,
    //   desc:this.newServerContent
    // })
  }
}
