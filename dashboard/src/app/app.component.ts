import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartDetailsComponent } from "./chart-details/chart-details.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, ChartDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
