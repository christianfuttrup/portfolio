import { Component, OnInit } from '@angular/core';

// Icons
import { faLinkedinIn, faMedium, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mailLink: string = ''
  public linkedInLink: string = 'https://www.linkedin.com/in/futtrup';
  public twitterLink: string = 'https://twitter.com/cfuttrupdk';

  public mail: IconDefinition = faEnvelope;
  public twitter: IconDefinition = faTwitter;
  public linkedIn: IconDefinition = faLinkedinIn;
  public medium: IconDefinition = faMedium;
  
  
}
