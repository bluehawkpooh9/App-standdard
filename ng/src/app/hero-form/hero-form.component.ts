import { Component } from '@angular/core';
 
import { Hero }    from '../hero';
 
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
 
  powers = ['Front End', 'Back End',
            ];
 
  model = new Hero(18, 'nuttakon', this.powers[0], 'taweepool');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newHero() {
    this.model = new Hero(42, '', '');
  }
}