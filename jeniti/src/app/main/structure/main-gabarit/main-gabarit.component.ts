import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-main-gabarit',
  templateUrl: './main-gabarit.component.html',
  styleUrls: ['./main-gabarit.component.scss']
})
export class MainGabaritComponent implements AfterViewChecked{
  @ViewChild('msgScroll') msgScroll!: ElementRef;

  ngAfterViewChecked(){
    this.msgScroll.nativeElement.scrollTop = this.msgScroll.nativeElement.scrollHeight;
  }

}
