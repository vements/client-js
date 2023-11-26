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

  const inner = forge({
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

  return {
    achievement: {
      leaderboard: async ({ achievementId }) => {
        const result = await inner.achievement.leaderboard({
          achievement_id: achievementId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`leaderboard failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).achievement_leaderboard;
      },

      record: async ({ achievementId, participantId, value, recorded }) => {
        const result = await inner.achievement.record({
          achievement_id: achievementId,
          body: {
            participant_id: participantId,
            value: value,
            recorded: recorded,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`record failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).insert_progress_one;
      },

      list: async ({ projectId, limit, offset }) => {
        const result = await inner.achievement.list({
          project_id: projectId,
          limit: limit,
          offset: offset,
        });
        if (result.responseStatus != 200) {
          throw new Error(`list failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).achievement;
      },

      create: async ({
        projectId,
        display,
        goal,
        repeats,
        lockedImage,
        unlockedImage,
        position,
        public_,
        extra,
      }) => {
        const result = await inner.achievement.create({
          body: {
            project_id: projectId,
            display: display,
            goal: goal,
            repeats: repeats,
            locked_image: lockedImage,
            unlocked_image: unlockedImage,
            position: position,
            public: public_,
            extra: extra,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`create failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).insert_achievement_one;
      },

      read: async ({ achievementId }) => {
        const result = await inner.achievement.read({
          achievement_id: achievementId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`read failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).achievement;
      },

      update: async ({
        achievementId,
        display,
        goal,
        repeats,
        lockedImage,
        unlockedImage,
        position,
        public_,
        extra,
      }) => {
        const result = await inner.achievement.update({
          achievement_id: achievementId,
          body: {
            display: display,
            goal: goal,
            repeats: repeats,
            locked_image: lockedImage,
            unlocked_image: unlockedImage,
            position: position,
            public: public_,
            extra: extra,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`update failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).update_achievement_by_pk;
      },

      delete: async ({ achievementId }) => {
        const result = await inner.achievement.delete({
          achievement_id: achievementId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`delete failed: ` + result.responseStatus);
        }
        return true;
      },
    },

    participant: {
      progress: async ({ participantId }) => {
        const result = await inner.participant.progress({
          participant_id: participantId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`progress failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).participant_progress;
      },

      scores: async ({ participantId }) => {
        const result = await inner.participant.scores({
          participant_id: participantId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`scores failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).participant_scores;
      },

      list: async ({ projectId, limit, offset }) => {
        const result = await inner.participant.list({
          project_id: projectId,
          limit: limit,
          offset: offset,
        });
        if (result.responseStatus != 200) {
          throw new Error(`list failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).participant;
      },

      create: async ({ projectId, display, externalId, image, extra }) => {
        const result = await inner.participant.create({
          body: {
            project_id: projectId,
            display: display,
            external_id: externalId,
            image: image,
            extra: extra,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`create failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).insert_participant_one;
      },

      read: async ({ participantId }) => {
        const result = await inner.participant.read({
          participant_id: participantId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`read failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).participant;
      },

      update: async ({ participantId, display, externalId, image, extra }) => {
        const result = await inner.participant.update({
          participant_id: participantId,
          body: {
            display: display,
            external_id: externalId,
            image: image,
            extra: extra,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`update failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).update_participant_by_pk;
      },

      delete: async ({ participantId }) => {
        const result = await inner.participant.delete({
          participant_id: participantId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`delete failed: ` + result.responseStatus);
        }
        return true;
      },
    },

    scoreboard: {
      record: async ({ scoreboardId, participantId, value, recorded }) => {
        const result = await inner.scoreboard.record({
          scoreboard_id: scoreboardId,
          body: {
            participant_id: participantId,
            value: value,
            recorded: recorded,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`record failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).insert_score_one;
      },

      scores: async ({ scoreboardId, from, to }) => {
        const result = await inner.scoreboard.scores({
          scoreboard_id: scoreboardId,
          from: from,
          to: to,
        });
        if (result.responseStatus != 200) {
          throw new Error(`scores failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).scoreboard_scores;
      },

      list: async ({ projectId, limit, offset }) => {
        const result = await inner.scoreboard.list({
          project_id: projectId,
          limit: limit,
          offset: offset,
        });
        if (result.responseStatus != 200) {
          throw new Error(`list failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).scoreboard;
      },

      create: async ({ projectId, display, rankDir, public_, extra }) => {
        const result = await inner.scoreboard.create({
          body: {
            project_id: projectId,
            display: display,
            rank_dir: rankDir,
            public: public_,
            extra: extra,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`create failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).insert_scoreboard_one;
      },

      read: async ({ scoreboardId }) => {
        const result = await inner.scoreboard.read({
          scoreboard_id: scoreboardId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`read failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).scoreboard;
      },

      update: async ({ scoreboardId, display, rankDir, public_, extra }) => {
        const result = await inner.scoreboard.update({
          scoreboard_id: scoreboardId,
          body: {
            display: display,
            rank_dir: rankDir,
            public: public_,
            extra: extra,
          },
        });
        if (result.responseStatus != 200) {
          throw new Error(`update failed: ` + result.responseStatus);
        }
        return JSON.parse(result.responseData).update_scoreboard_by_pk;
      },

      delete: async ({ scoreboardId }) => {
        const result = await inner.scoreboard.delete({
          scoreboard_id: scoreboardId,
        });
        if (result.responseStatus != 200) {
          throw new Error(`delete failed: ` + result.responseStatus);
        }
        return true;
      },
    },
  };
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

