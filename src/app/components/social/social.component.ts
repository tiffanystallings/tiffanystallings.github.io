import { Component } from '@angular/core';
import socialJson from '../../../data/social.json';
import { Social } from '../../interfaces/social.interface';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  socials:Array<Social> = [];
  ngOnInit() {
    this.socials = socialJson;
  }
}
