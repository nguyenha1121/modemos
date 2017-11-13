import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embeddings',
  templateUrl: './embeddings.component.html',
  styleUrls: ['./embeddings.component.css']
})
export class EmbeddingsComponent implements OnInit {

  constructor() {
    this.options = {
      chart: { type: 'spline' },
      title: { text : 'dynamic data example'},
      series: [{ data: [2, 3, 5, 8, 13]}]
    };
    setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
  }
  chart: any;
  options: Object;
  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

  ngOnInit() {
  }

}
