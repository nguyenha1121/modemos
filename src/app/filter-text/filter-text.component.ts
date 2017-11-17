import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent implements OnInit {

  info = {
    hateClassifier: [{
      text: 'Oyoty Hate',
      value: 'oyoty-hate'
    },
    {
      text: 'Keyword',
      value: 'keyword'
    },
    {
      text: 'Oyoty Toxicity',
      value: 'oyoty-toxicity'
    }],
    status: '0',
    listTweet: [],
    state: {
      sliderValue: 0,
      condition: {
        sortBy: 'oyoty-hate',
        minValue: 0
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  touchSlider() {
    console.log(1);
  }

  changeSlicer(e?: any) {
    this.info.state.condition.minValue = e.value;
  }

  changeClassifier(e?: any) {
    this.info.state.condition.sortBy = e.value;
  }

}
