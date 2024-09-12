import { Component, Input, input } from '@angular/core';

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
      <h2>{{j}} {{color}} {{parentData}}</h2>
    </div>

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

  @Input() public parentData: any;

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
}
