import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-chart-details',
  templateUrl: './chart-details.component.html',
  styleUrls: ['./chart-details.component.scss'],
  imports: []
})
export class ChartDetailsComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.renderBarChart();
      this.renderGaugeChart();
    }, 1000);
  }

  renderBarChart() {
    c3.generate({
      bindto: '#bar-chart',
      size: {
        height: 300,
        width: 950
      },
      data: {
        json: [
          { month: 'Jan', high: 30, medium: 10, less: 5 },
          { month: 'Feb', high: 50, medium: 30, less: 20 },
          { month: 'Mar', high: 50, medium: 40, less: 15 },
          { month: 'Apr', high: 40, medium: 50, less: 20 },
          { month: 'May', high: 60, medium: 30, less: 25 },
          { month: 'Jun', high: 50, medium: 60, less: 10 },
          { month: 'Jul', high: 70, medium: 40, less: 30 },
          { month: 'Aug', high: 60, medium: 50, less: 20 },
          { month: 'Sep', high: 50, medium: 40, less: 15 },
          { month: 'Oct', high: 40, medium: 50, less: 25 },
          { month: 'Nov', high: 30, medium: 60, less: 30 },
          { month: 'Dec', high: 20, medium: 70, less: 20 }
        ],
        keys: {
          x: 'month',
          value: ['high', 'medium', 'less']
        },
        type: 'bar',
        groups: [['high', 'medium', 'less']],
        colors: {
          high: '#A78BFA',
          medium: '#D8B4FE',
          less: '#E9D5FF'
        }
      },
      axis: {
        x: {
          type: 'category',
          label: {
            text: 'Months',
            position: 'outer-center'
          },
          padding: {
            top: 10
          }
        },
        y: {
          label: {
            text: 'Security Ratings',
            position: 'outer-middle'
          }
        }
      },
      tooltip: {
        show: true
      },
      legend: {
        show: false
      },
      bar: {
        width: {
          ratio: 0.5
        }
      }
    });
  }

  renderGaugeChart() {
    c3.generate({
      bindto: '#gauge-chart',
      data: {
        json: [{ Used: 80 }],
        keys: {
          value: ['Used'],
        },
        type: 'gauge',
      },
      gauge: {
        label: {
          format: function (value: number) {
            return value + '%';
          },
        },
        min: 0,
        max: 100,
        width: 20,
      },
      color: {
        pattern: ['#60B044', '#F6C600', '#A78BFA', '#A78BFA'],
        threshold: {
          values: [30, 60, 90, 100],
        },
      },
    });
  }
}
