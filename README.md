

# Code Test Task - Some notes from Gillian
Using any framework you prefer (or none), utilise the Hacker News API to create a web application that shows the latest stories

Approach:
1. Create a bare bones Nuxt (Vue.js) app with Tailwind and Nuxt Icon plugins for speed of startup
2. Add header, footer and news item components bare bones
3. Improve on the design of the created components
4. Add some tests

Explainer of approach:
* I decided to just go for something very simple and easy to read with colours that contrast strongly.
* My temptation was to add in some jazzy backgrounds but I figured that would make the page harder to read

## Frameworks
I used Vue 3 with Nuxt to quickstart the project. I used Tailwind for the CSS just because it provides a neat and efficient set of styling options.
I added the Nuxt Icon plugin just to add the upvote icon. I didnt' use any state management at this point because it seemed kind of unnecessary.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Tests
There's tests for the four components just to give an example of a few unit tests using Vitest.

## Features added
* Header
* Footer
* List of news items
* Filter options that can change the list

## Features not yet added
* More stories option is included but not working
* Login not doing anything really
* I'd like to add a loading component for the switches between filters on the stories
* This UI theme is kind of loosely based on the Hacker News page but I'm mainly using Tailwind, would be more consistent with more time and though.
* I think there's probably a regex I need to do to get the domain from the url and display it but I'm going to leave that out for now
* The rest of the site, of course!


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

Run tests:

```bash
# npm
npm test

```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview

```


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



