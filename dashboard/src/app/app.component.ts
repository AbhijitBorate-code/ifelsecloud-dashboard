import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartDetailsComponent } from "./chart-details/chart-details.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar/navigation-bar.component";
import { MainGridComponent } from "./table-actions/main-grid/main-grid.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, ChartDetailsComponent, MainGridComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
