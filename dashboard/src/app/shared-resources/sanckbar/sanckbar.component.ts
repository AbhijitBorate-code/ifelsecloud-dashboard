import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sanckbar',
  imports: [CommonModule],
  templateUrl: './sanckbar.component.html',
  styleUrl: './sanckbar.component.scss'
})
export class SanckbarComponent  implements OnChanges{

  @Input() message = '';
  @Input() type: 'success' | 'error' | 'info' = 'info';
  show = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] && this.message) {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 10000);
    }
  }


}
