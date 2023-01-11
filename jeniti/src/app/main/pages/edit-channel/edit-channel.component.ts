import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.scss'],
})
export class EditChannelComponent {
  idChannel!: number;
  channelForm!: FormGroup;

  constructor(
    private cService: ChannelsService,
    private formBuilder: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router
  ) {
    this.idChannel = +this.aRouter.snapshot.params['id'];

    this.cService.getChannelById(this.idChannel).subscribe((channel) => {

      this.channelForm = this.formBuilder.group({
        name: [channel.name, Validators.required],
        description: [channel.description, Validators.required],
      });
    });
  }

  onSubmit(): void {
    this.cService
      .updateChannel(this.channelForm.value, this.idChannel)
      .subscribe(() => this.router.navigate(['main', this.idChannel]));
  }
}
