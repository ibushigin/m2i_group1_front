import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss'],
})
export class AddChannelComponent{
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
