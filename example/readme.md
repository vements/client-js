## JavaScript Example for Vements

This directory contains an example of how to use the Vements Client Library for JavaScript to create a client and use that client to create a new participant, scores for that participant, and finally view a scoreboard with those scores.

### Prerequisites

Before you can continue, you must have the following:

- API key
- Project ID
- Scoreboard ID

To create these resources and get their IDs, create a trial or paid account at [Vements](https://vements.io).  Then log into the dashboard and create a new project.  Once you have a project, you can create an API key and a scoreboard.  Important: create a "read-write" API key.  The example will not work with a "read-only" API key.

### Running the Example

To run the example, first clone the repo:

```shell
$ git clone https://github.com/vements/client-js
```

Then update the `example.js` file to use your Vements API key and the ID of your project.  Change the following lines:

```javascript
API_KEY       = "put your API key here";
PROJECT_ID    = "put your project ID here";
SCOREBOARD_ID = "put your scoreboard ID here";
```

Then run the example:

```shell
$ cd client-js
$ npm run build
$ node example/example.js
```