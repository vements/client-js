/*
Copyright 2023 Monster Street Systems LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// NB: This is a generated file; any changes will be lost.

import forge from "mappersmith";
import EncodeJsonMiddleware from "mappersmith/middleware/encode-json";

import { Config } from "./config";
import { CLI } from "./cli";

export * from "./config";
export * from "./cli";

export const Client = ({ apiKey, config, tags }) => {
  const { pathname, origin } = new URL(
    config.serverUrl(tags || ["production"]),
  );
  const headers = { "x-api-key": apiKey, "content-type": "application/json" };

  return forge({
    clientId: "vements",
    host: origin,
    middleware: [EncodeJsonMiddleware],
    resources: {
      achievement: {
        leaderboard: {
          path: `${pathname}achievement/{achievement_id}/leaderboard`,
          method: "GET",
          headers: headers,
        },
        record: {
          path: `${pathname}achievement/{achievement_id}/progress`,
          method: "PUT",
          headers: headers,
        },
        list: {
          path: `${pathname}achievement`,
          method: "GET",
          headers: headers,
        },
        create: {
          path: `${pathname}achievement`,
          method: "PUT",
          headers: headers,
        },
        read: {
          path: `${pathname}achievement/{achievement_id}`,
          method: "GET",
          headers: headers,
        },
        update: {
          path: `${pathname}achievement/{achievement_id}`,
          method: "POST",
          headers: headers,
        },
        delete: {
          path: `${pathname}achievement/{achievement_id}`,
          method: "DELETE",
          headers: headers,
        },
      },

      participant: {
        progress: {
          path: `${pathname}participant/{participant_id}/progress`,
          method: "GET",
          headers: headers,
        },
        scores: {
          path: `${pathname}participant/{participant_id}/scores`,
          method: "GET",
          headers: headers,
        },
        list: {
          path: `${pathname}participant`,
          method: "GET",
          headers: headers,
        },
        create: {
          path: `${pathname}participant`,
          method: "PUT",
          headers: headers,
        },
        read: {
          path: `${pathname}participant/{participant_id}`,
          method: "GET",
          headers: headers,
        },
        update: {
          path: `${pathname}participant/{participant_id}`,
          method: "POST",
          headers: headers,
        },
        delete: {
          path: `${pathname}participant/{participant_id}`,
          method: "DELETE",
          headers: headers,
        },
      },

      scoreboard: {
        record: {
          path: `${pathname}scoreboard/{scoreboard_id}/score`,
          method: "PUT",
          headers: headers,
        },
        scores: {
          path: `${pathname}scoreboard/{scoreboard_id}/scores`,
          method: "GET",
          headers: headers,
        },
        list: {
          path: `${pathname}scoreboard`,
          method: "GET",
          headers: headers,
        },
        create: {
          path: `${pathname}scoreboard`,
          method: "PUT",
          headers: headers,
        },
        read: {
          path: `${pathname}scoreboard/{scoreboard_id}`,
          method: "GET",
          headers: headers,
        },
        update: {
          path: `${pathname}scoreboard/{scoreboard_id}`,
          method: "POST",
          headers: headers,
        },
        delete: {
          path: `${pathname}scoreboard/{scoreboard_id}`,
          method: "DELETE",
          headers: headers,
        },
      },
    },
  });
};

if (require.main === module) {
  const config = Config.default();
  const tags = (process.env.SERVER_TAGS || "").split(",");
  const client = Client({
    apiKey: process.env.API_KEY,
    config: config,
    tags: tags,
  });
  CLI(config, client);
}

