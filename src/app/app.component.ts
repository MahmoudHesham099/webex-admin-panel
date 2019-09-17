import { Component } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADD';

constructor( private http:HttpClient ){}

public imgValue="";
public typeValue="";
public nameValue="";
public linkValue="";

content={img:null,type:null,name:null,link:null}

onAdd(){
  
  if (this.imgValue==""||this.typeValue==""||this.nameValue==""||this.linkValue=="") {
    
    console.log("Error");

  }else{

    this.content.img=this.imgValue;
    this.content.type=this.typeValue;
    this.content.name=this.nameValue;
    this.content.link=this.linkValue;
  
    this.http.post('https://ng-webex.firebaseio.com/recent.json',this.content)
    .subscribe(data=>{
      console.log(data)
    })
  
    this.imgValue="";
    this.typeValue="";
    this.nameValue="";
    this.linkValue="";
  
  }
  }
}
