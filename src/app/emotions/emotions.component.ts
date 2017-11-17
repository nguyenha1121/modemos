import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})

export class EmotionsComponent implements OnInit {

  info: any = {
    active: {
      status: 0, // loadding || true
      imageURL: null,
      text: '',
      outputData: {
      }
    },
    options: [
    ]
  };

  chart: any;

  constructor() { }

  ngOnInit() {
  }

  // events
  getRandomImage() {
    if ( this.info.active.status === 0 || this.info.active.status === 2) {
      // start loadding data
      this.info.active.status = 2;
      // TODO
      // setInterval(() => {
      this.info.active.status = 1;
      this.info.active.imageURL = 'http://farm3.staticflickr.com/2917/14362397619_48824fee7d_z.jpg';
      this.info.active.text = 'anything';
      this.info.active.outputData = {
        text: {
          amusement: 0.8,
          anger: 0.05,
          awe: 0.05,
          contentment: 0.05,
          disgust: 0.04,
          excitement: 0.06,
          fear: 0,
          sadness: 0,
        },
        image: {
          amusement: 0.08,
          anger: 0.15,
          awe: 0.5,
          contentment: 0.05,
          disgust: 0.4,
          excitement: 0.6,
          fear: 0,
          sadness: 0.5,
        },
        fusion: {
          amusement: 0.8,
          anger: 0.35,
          awe: 0.05,
          contentment: 0.05,
          disgust: 0.4,
          excitement: 0.06,
          fear: 0.2,
          sadness: 0.1,
        }
      };

      const outputData = this.info.active.outputData;
      for (const key in outputData) {
        if (outputData.hasOwnProperty(key)) {
          const element = outputData[key];
          this.info.options.push({
            op: this.bindDate(outputData[key], key),
            principal: this.getPrincipal(outputData[key])
          });
        }
      }
      // }, 1000);
    } else {
      this.info = {
        active: {
          status: 0, // loadding || true
          imageURL: null,
          text: '',
          outputData: {
          }
        },
        options: [
        ]
      };
    }
  }

  getPrincipal(data: any) {
    let opacity = 0;
    let main = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (opacity < element) {
          opacity = element;
          main = key;
        }
      }
    }
    return {
      opacity,
      main
    };
  }

  bindDate(data: any, key?: any) {
    console.log(data);
    const options = {
      chart: {
          marginLeft: 60, marginRight: 60, polar: true, spacingBottom: 40, spacingTop: 0, spacingLeft: 5, spacingRight: 5, animation: {
              duration: 1500
          }
          , width: 330, height: 330
      },
      exporting: {
        enabled: !1
      },
      title: {
          text: key ? key : '', align: 'center', verticalAlign: 'top', margin: 50, floating: !0, y: 30
      },
      legend: {
          enabled: !1
      },
      xAxis: {
          tickInterval: 1, min: 0, max: 7, categories: this.getCategories()
      },
      tooltip: {
          formatter: function() {
              return '<b>' + this.x;
          }
      },
      yAxis: {
          min: 0, tickInterval: 10, tickPositions: [0, 20, 40, 60, 80, 100], minorTickInterval: 0, labels: {
              enabled: !1
          }
      },
      plotOptions: {
          series: {
              pointStart: 0, pointInterval: 1
          }
          , column: {
              pointPadding: 0, groupPadding: 0, colorByPoint: !0
          }
      },
      series: [{
          pointPlacement: 'on', type: 'column', name: 'level', data: [
            data.amusement * 100,
            data.anger * 100,
            data.awe * 100,
            data.contentment * 100,
            data.disgust * 100,
            data.excitement * 100,
            data.fear * 100,
            data.sadness * 100
          ]
      }]
    };
    return options;
  }

  getCategories() {
    // amusement: number;
    // anger: number;
    // awe: number;
    // contentment: number;
    // disgust: number;
    // excitement: number;
    // fear: number;
    // sadness: number;
      const categories = ['amusement', 'anger', 'awe', 'contentment', 'disgust', 'excitement', 'fear', 'sadness'];
      return categories;
  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }

  closeImg() {
    this.info = {
      active: {
        status: 0, // loadding || true
        imageURL: null,
        text: '',
        outputData: {
        }
      },
      options: [
      ]
    };
  }
  reload (e) {
    console.log(e);
  }

}
