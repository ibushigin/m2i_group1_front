import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss'],
})
export class AddChannelComponent {
  channelForm!: FormGroup;
  sessionUser$!: BehaviorSubject<User>;
  route!: string;
  currentChannelId!: number;

  constructor(
    private cService: ChannelsService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.sessionUser$ = this.auth.bSessionUser$;
    this.auth.refreshSessionUser().subscribe((user) => {
      this.currentChannelId = user.current_channel.id;
      this.route = `/main/${user.current_channel.id}`;
    });
    this.channelForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  onSubmit(): void {
    this.cService
      .addChannel(this.channelForm.value)
      .subscribe((channel) => this.router.navigate(['main', this.currentChannelId]));
  }
}
