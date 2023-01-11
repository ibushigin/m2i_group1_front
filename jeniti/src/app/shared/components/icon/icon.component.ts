import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Icons } from 'src/app/core/enums/icons';
import {LoginIcons} from "../../../core/enums/login-icons";


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() type!:
    | 'CROIX'
    | 'EDIT'
    | 'DELETE'
    | 'NAV'
    | 'SEND'
    | 'BACK'
    | 'OUT'
    | 'PLUS'
    | 'ASTRONAUT'
    | 'NINJA'
    | 'SPY';
  icon!: IconDefinition;

  ngOnInit(): void {
    if (this.type == 'CROIX') {
      this.icon = Icons.CROIX;
    } else if (this.type == 'EDIT') {
      this.icon = Icons.EDIT;
    } else if (this.type == 'DELETE') {
      this.icon = Icons.DELETE;
    } else if (this.type == 'NAV') {
      this.icon = Icons.NAV;
    } else if (this.type == 'SEND') {
      this.icon = Icons.SEND;
    } else if (this.type == 'BACK') {
      this.icon = Icons.BACK;
    } else if (this.type == 'PLUS') {
      this.icon = Icons.PLUS;
    }else if (this.type == 'OUT') {
      this.icon = Icons.OUT;
    }else if (this.type == 'ASTRONAUT') {
      this.icon = LoginIcons.ASTRONAUT;
    }else if (this.type == 'NINJA'){
      this.icon = LoginIcons.NINJA;
    }else if (this.type == 'SPY'){
      this.icon = LoginIcons.SPY;
    }

  }
}
