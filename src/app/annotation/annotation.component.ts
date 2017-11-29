import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent implements OnInit {

  constructor() { }

  info = {
    listTweets: [
      'ummm. no it didnt work so i guess im stuck with this uglyonee',
      'Gotta TeraByte of space to store movies',
      "HAPPY MOTHER'S DAY to ALL MOM'S HERE and to YOUR MOMS too",
      "Why don't you make me feel like you used to",
      "Oh fml its probs gunna be at shepards bush i hate it there",
      "Its beautiful outside. I wish i was in new york city. But this area is pretty cool. Hip and trendy.",
      "@kazzababe95 cut yourself a slice of cheese cake.. it makes everything better",
      "Also, WHERE IS MY TOY STORY 3 TEASER CARMIKE 14? YOU SAID THERE WOULD BE TOY STORY 3! Movie theater fail",
      "@TheRankinFiles to be fair, she was asking about mktg cd's, etc, but I suggested more and she never even emailed back.",
      "Version 2 of our live, interactive Trans-Siberian ticket planner is launched: http://tinyurl.com/c5ljwm - its very cool",
      "Had a shower. it's 5:55 PM. Triple 5's! Crap, it just turned 5:56",
      "oh yes, the Cavs win game5, now onto game6. it's still danger, they HAVE to win this one either, it's no shot for the championship",
      "@tarng Trudy's off Burnet...the one up north that no one goes to",
      "BTW, hey ppl. lol TGIF. Hopefully ur day is gr8. Mine is aight. Feeling like it kinda sux I got no plans 4 the wknd....",
      "Yeah it's Friday but I have to work at 5am tomorrow oh well going shopping afterwork",
      "I love ridding in this weather",
      "@opalbonfante Wonderful! Let me know what you think. Not light reading",
      "no Santa cruz for me but I do have an interview at jamba tomorrow morning (:",
      "Eating at Zippys with candace!",
      "HEY YOU' ALL SUCK;its anybody on there :s im so bored common answear me",
      "#whorewhore she is",
      "@DustBuny: being today and all, WE'RE GONNA USE THE FORCE to make it happen!",
      "wishes I could be the one going to our conference in the Bahamas next week"
    ],
    result: undefined,
    active: ''
  };

  run: any;

  ngOnInit() {
  }

  selectTweet(tweet?: any) {
    this.info.active = tweet;
    this.runningMan(100, () => this.getResult());
  }

  getResult() {
    this.info.result = {
      tree: {
        name: 'Root',
        // active: 1,
        children: [
          {
            name: 'Scenic',
            active: 1,
            children: [
              {
                name: 'Marine species',
                active: 1
              },
              {
                name: 'Beaches',
                active: 0
              },
              {
                name: 'Islands',
                active: 0
              },
              {
                name: 'Valleys',
                active: 0
              },
              {
                name: 'Waterfalls',
                active: 0
              },
              {
                name: 'Forests',
                active: 0
              }
            ]
          },
          {
            name: 'Air tours',
            active: 1,
            children: [
              {
                name: 'Sccenic flight tours',
                active: 0
              },
              {
                name: 'Sky diving',
                active: 0
              }
            ]
          },
          {
            name: 'Water-based activities',
            active: 1,
            children: [
              {
                name: 'Sailing',
                active: 1
              },
              {
                name: 'Cruise',
                active: 0
              },
              {
                name: 'Boat tour',
                active: 0
              },
              {
                name: 'Whale watching',
                active: 0
              },
              {
                name: 'Jet tours',
                active: 0
              },
              {
                name: 'Fishing charters',
                active: 0
              },
            ]
          },
          {
            name: 'Underwater tours',
            active: 1,
            children: [
              {
                name: 'Snorkelling tour',
                active: 1
              },
              {
                name: 'Diving',
                active: 0
              }
            ]
          },
          {
            name: 'Activities',
            active: 1,
            children: [
              {
                name: 'Hiking',
                active: 0
              },
              {
                name: 'Swimming',
                active: 0
              },
              {
                name: 'Horse riding',
                active: 1
              },
              {
                name: 'Surfing',
                active: 0
              }
            ]
          },
          {
            name: 'General',
            active: 1
          }
        ]
      }
    };
  }

  /**
   * Map data receive to tree
   */

  deserialize(data: any) {
    let tree = {
      name: 'Root',
      // active: 1,
      children: [
        {
          name: 'Scenic',
          active: 1,
          children: [
            {
              name: 'Marine species',
              active: 1
            },
            {
              name: 'Beaches',
              active: 0
            },
            {
              name: 'Islands',
              active: 0
            },
            {
              name: 'Valleys',
              active: 0
            },
            {
              name: 'Waterfalls',
              active: 0
            },
            {
              name: 'Forests',
              active: 0
            }
          ]
        },
        {
          name: 'Air tours',
          active: 1,
          children: [
            {
              name: 'Sccenic flight tours',
              active: 0
            },
            {
              name: 'Sky diving',
              active: 0
            }
          ]
        },
        {
          name: 'Water-based activities',
          active: 1,
          children: [
            {
              name: 'Sailing',
              active: 1
            },
            {
              name: 'Cruise',
              active: 0
            },
            {
              name: 'Boat tour',
              active: 0
            },
            {
              name: 'Whale watching',
              active: 0
            },
            {
              name: 'Jet tours',
              active: 0
            },
            {
              name: 'Fishing charters',
              active: 0
            },
          ]
        },
        {
          name: 'Underwater tours',
          active: 1,
          children: [
            {
              name: 'Snorkelling tour',
              active: 1
            },
            {
              name: 'Diving',
              active: 0
            }
          ]
        },
        {
          name: 'Activities',
          active: 1,
          children: [
            {
              name: 'Hiking',
              active: 0
            },
            {
              name: 'Swimming',
              active: 0
            },
            {
              name: 'Horse riding',
              active: 1
            },
            {
              name: 'Surfing',
              active: 0
            }
          ]
        },
        {
          name: 'General',
          active: 1
        }
      ]
    };
  }

  /**
   * config random path of tree
   */
  sl() {
    this.info.result = {
      tree: {
        name: 'Root',
        // active: 1,
        children: [
          {
            name: 'Scenic',
            active: Math.floor(Math.random() * 2),
            children: [
              {
                name: 'Marine species',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Beaches',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Islands',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Valleys',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Waterfalls',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Forests',
                active: Math.floor(Math.random() * 2)
              }
            ]
          },
          {
            name: 'Air tours',
            active: Math.floor(Math.random() * 2),
            children: [
              {
                name: 'Sccenic flight tours',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Sky diving',
                active: Math.floor(Math.random() * 2)
              }
            ]
          },
          {
            name: 'Water-based activities',
            active: Math.floor(Math.random() * 2),
            children: [
              {
                name: 'Sailing',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Cruise',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Boat tour',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Whale watching',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Jet tours',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Fishing charters',
                active: Math.floor(Math.random() * 2)
              },
            ]
          },
          {
            name: 'Underwater tours',
            active: Math.floor(Math.random() * 2),
            children: [
              {
                name: 'Snorkelling tour',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Diving',
                active: Math.floor(Math.random() * 2)
              }
            ]
          },
          {
            name: 'Activities',
            active: Math.floor(Math.random() * 2),
            children: [
              {
                name: 'Hiking',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Swimming',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Horse riding',
                active: Math.floor(Math.random() * 2)
              },
              {
                name: 'Surfing',
                active: Math.floor(Math.random() * 2)
              }
            ]
          },
          {
            name: 'General',
            active: Math.floor(Math.random() * 2)
          }
        ]
      }
    };
  }

  /****
   * Run tree
   */
  runningMan(time?: any, callback?: () => void) {
    if (time === undefined) {
      time = 100;
    }
    this.run = setInterval(() => {
      time --;
      if (time <= 0) {
        clearInterval(this.run);
        callback();
      } else {
        this.sl();
      }
    }, 10);
  }

}

