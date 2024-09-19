import { Component, Input, input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>name</p>
    <input type="text" value="{{name}}" [id]="myId">
    <h2 [ngClass]="messageClass">Learning Angular</h2>
    <p [class]=Success>{{printName('Ransom')}}</p>
    <p [class.text-danger]=isDanger>{{printName('Ransom')}}</p>
    <button (click)="onClick($event)"> Click here</button>
    {{bye}}
    <input type="text" #in>
    <button (click)="displayMessage(in.value)">display</button>
    <p [style.color]="isDanger ? 'aqua' : 'yellow' ">{{printName('People of North west and SouthWest')}}</p>
    <input [(ngModel)]="test" type="test">
    {{test}}

    <div *ngFor="let color of colors; index as j">
      <h2>{{j}} {{color}} {{uname}}</h2>
    </div>

    <button (click)="fireEvent()">Send Event</button><br>

    <div [hidden]="isHidden">
    <p>{{uname | uppercase | slice:2:5}}</p>
    <p>{{human | json}}</p>
    </div>

    <button (click)="toggle()">Show Pipes</button>

  `,
  styles: [`
    .text-success {
      color: green
    }
    .text-danger {
      color: red
    }
    `]
})
export class TestComponent {
  public name = 'Ransom';
  public myId = 'testId';

  public Success = "text-success";
  public isDanger = true;
  public bye = '';
  public test = '';

  public colors = ['green', 'red', 'yellow', 'blue']

  public messageClass = {
    "text-success": !this.isDanger,
    "text-danger": this.isDanger
  }

  displayMessage(input: any) {
    console.log(input)
  }

  onClick(event: any) {
    this.bye = "bye bye to you"; 
    console.log(event.type);
  }

  constructor() {

  }

  printName(name:string): string{
    return `Your name is ${name}`
  }

  @Input('parentData') public uname: any;

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey Everyone');
  }

  public human = {
    firstname:"Ransom",
    Lastname:"Bonya"
  }

  public isHidden = true;

  toggle() {
    this.isHidden = !this.isHidden
  }

}
