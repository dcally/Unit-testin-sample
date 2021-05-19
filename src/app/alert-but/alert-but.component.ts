import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alert-but',
  templateUrl: './alert-but.component.html',
  styleUrls: ['./alert-but.component.css']
})
export class AlertButComponent implements OnInit {

  hidden: boolean = true;
  counter = 0;
  //content = 'you are warned';

  content: Observable<any>;

  clicked(): void{
    this.hidden = !this.hidden;
    this.counter++;
    console.log(this.hidden + " " + this.counter);
  }

  clickedAsnc(): void{
    timer(500).subscribe(() => {
      this.clicked()
    });
  }

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
    this.content = this.msgService.getText();
  }

}
