import { logging } from 'protractor';
import { Component } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { favChangeEventargs } from './favourite/favourite.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'sk-covid-india-district';
  isActive:boolean=true;
  emailadd:string="sridhar.kidambi@wipro.com";
  text:string='We’re reaching out to let you know that Robinhood is currently back up and running. We want to assure you that your funds are safe and personal information was not affected';
   post = {
     isFavourite: false,
   }
  
  Onsave($event){
    $event.stopPropagation();
    console.log("Buttom was clicked for save." ,$event);
  }
  OnsaveParent($event){
    console.log("Buttom  parent was clicked for save." ,$event);
  }
  OnEnterMe($event){
    console.log("on keyup  was entered." ,$event);
  }
  OnEnterMe1($event){
    console.log("on keyup  was entered.",$event.target.value);

  }
  OnFavouriteChanged(args:favChangeEventargs){
    this.post.isFavourite= !args.optionvalue;
    console.log('OnFavouriteChanged() is clicked');
  }
}
