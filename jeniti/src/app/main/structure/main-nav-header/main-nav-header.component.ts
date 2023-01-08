import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-main-nav-header',
  templateUrl: './main-nav-header.component.html',
  styleUrls: ['./main-nav-header.component.scss'],
})
export class MainNavHeaderComponent {
  channelForm!: FormGroup;
  constructor(
    private cService: ChannelsService,
    private formBuilder: FormBuilder
  ) {
    this.channelForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  onSubmit(): void {
    this.cService.addChannel(this.channelForm.value);
  }
}
