# Reddit Client

This is mostly intended as a demo of some basic practices. It isn't
intended to be an actually useful Reddit client!

## Getting started

1. Clone this repo
2. Install node modules with `yarn`
3. Edit config/development.js to contain valid Reddit credentials
4. Run `npm start`

## Conventions

### imports

This project is using a convention of:

1. style includes (ie `import './Component.scss';`)
2. non-local includes (ie `import React from 'react';`)
3. local includes (ie `import Header from './Header';`)

## Notes

* react-router 2.8.1 is used just because most familiar with that API
* most styles are a copy and paste from Reddit (and thus aren't taking advantage of SCSS)
* UI components tested during development -- no written tests (deemed lower priority due to time)

## Feedback on directions

* wasted a fair amount of time on authentication only to realize it was not needed -- it would be helpful to mention that in the writeup to make it clear the scope is not as big as it might appear on first read through
* not clear if should show only 25 things in a subreddit or allow fetching more -- going to assume don't need to fetch more
* meaning of "reactive approach" is a big ambigious -- would be good to clarify (I'm assuming I'm using a reactive approach)
