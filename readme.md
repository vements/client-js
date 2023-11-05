## Vements Client Library for JavaScript

The Vements Client Library for JavaScript is a client library for accessing the Vements API from applications written in the JavaScript language. It also includes a command line tool that can be used to interact with the API in scripts or in a terminal.

### Documentation

See the [JavaScript API docs](https://example.com/) for more information on how to use this library.

### Installation

To install the Vements Client Library for JavaScript, use the following command:

```bash
$ npm install @vements/client-js --save
```


### Usage

The following example shows how to use the Vements Client Library for JavaScript to create a new Vements client, and then use that client to create a new Vements scoreboard.

```javascript
import { Client } from "@vements/client-js";

const client = Client("YOUR_API_KEY")
const scoreboard = client.scoreboard.Create({display: "My Scoreboard", rankDir: "desc", public: false})
```


### Command Line Tool

The Vements Client Library for JavaScript includes a command line tool that can be used to interact with the Vements API. The command line tool supports all of the same operations as the API.


#### Usage

```bash 
$ vements --help
```

The JavaScript CLI tool supports all of the same operations as the CLI tool in other languages:

* achievement CRUD, list, leaderboard, record progress
* participant CRUD, list, progress, scores
* scoreboard CRUD, list, scoreboard, record score

The above commands all support the following options:

* `--api-key` to specify the API key
* `--verbose` to show verbose output

In addition to resource commands, these common commands are also supported:

* `api-version` to show the API version
* `client-version` to show the client library version

The library and CLI both support the following environment variables:

* `API_KEY` to specify the API key
* `SERVER_TAGS` to specify the tags used to select the server URL
