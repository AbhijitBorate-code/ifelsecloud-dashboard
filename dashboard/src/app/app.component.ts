import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartDetailsComponent } from "./chart-details/chart-details.component";

@Component({
  selector: 'app-root',
  imports: [ChartDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
