import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html'
})
export class ClockComponent {
  time = interval(10).pipe(map(v => v / 100));
}
