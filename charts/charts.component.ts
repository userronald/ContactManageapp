import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

import { Colors, Labels, NgChartjsModule } from 'ng-chartjs';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  public lineChartData: ChartDataset[] = [
    { data: [], label: 'Cases' },
    { data: [], label: 'Deaths' },
    { data: [], label: 'Recovered' }
  ];

  public lineChartLabels: Labels[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors: Colors[] = [
    { borderColor: 'red', backgroundColor: 'rgba(255,0,0,0.2)' },
    { borderColor: 'blue', backgroundColor: 'rgba(0,0,255,0.2)' },
    { borderColor: 'green', backgroundColor: 'rgba(0,255,0,0.2)' },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch data and populate lineChartData and lineChartLabels
    // Example data, replace this with your actual data
    const data = {
      cases: [/* cases data */],
      deaths: [/* deaths data */],
      recovered: [/* recovered data */],
      labels: [/* labels data */],
    };

    this.lineChartData[0].data = data.cases;
    this.lineChartData[1].data = data.deaths;
    this.lineChartData[2].data = data.recovered;
    this.lineChartLabels = data.labels;
  }
}
