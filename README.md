# Reddit Client

This is mostly intended as a demo of some basic practices. It isn't
intended to be an actually useful Reddit client!

## Getting started

1. Clone this repo
2. Install node modules with `yarn`
3. Run `npm start`
4. Open browser to [http://localhost:8080](http://localhost:8080)

To run the tests: `npm run test`

## Code structure

* `src/index.js` is entry point
* `src/components` has all the React components (React also used in `src/index.js`)
* `src` has redux things (store, actions, reducers)
* `test` has tests for non-React things

## Conventions

### imports in React components

This project is using a convention of:

1. non-local includes (ie `import React from 'react';`)
2. local includes (ie `import Header from './Header';`)
3. style includes (ie `import './Component.scss';`)

## Notes

* react-router 2.8.1 is used just because most familiar with that API
* most styles are a copy and paste from Reddit (and thus aren't taking much advantage of SCSS)
* UI components tested manually during development -- no written tests (deemed lower priority due to time)

## Feedback on directions

* it would be nice to make it clear that no authentication is needed -- I spent a fair amount of time assuming the Reddit API docs having "oauth" next to the listing endpoints meant I actually needed to go figure out a way to do authentication (that would work w/o a server, etc) so it would be helpful to mention that in the writeup to make it clear the scope is not as big as it might appear on first read through
* not clear if should show only 25 things in a subreddit or allow fetching more -- going to assume don't need to fetch more
* meaning of "reactive approach" is a bit ambigious -- would be good to clarify (I'm assuming I'm using a reactive approach)
* keeping page in the same place I am interpreting as "keeping browser scrolled down the same amount (if it is scrolled down)" 
