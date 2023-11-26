// Copyright 2023 Monster Street Systems LLC

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the “Software”), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// NB: This is a generated file; any changes will be lost.

import { faker } from "@faker-js/faker";

import { Client } from "../src/index.js";
import { Config } from "../src/config.js";

const tags = ["development", "host", "substitute"];

const DB = async () => {
  const config = Config.default();
  const result = fetch(config.serverUrl(tags) + "-/database", {
    method: "POST",
  });
  return (await result).json();
};

const Setup = async () => {
  const db = await DB();
  const record = db["api_key"].filter((k) => k["capability"] == "rw")[0];
  const projectId = record["project_id"];
  const apiKey = `${projectId}:${record["api_key_id"]}`;

  return {
    apiKey: apiKey,
    client: Client({ apiKey: apiKey, config: Config.default(), tags: tags }),
    db: db,

    getValue: (key) => {
      if (key == "recorded") {
        return new Date().toISOString();
      }
      if (key == "project_id") {
        return projectId;
      }
      const resource = key.split("_")[0];
      const resources = db[resource].filter(
        (r) => r["project_id"] == projectId,
      );
      return resources[Math.floor(Math.random() * resources.length)][
        resource + "_id"
      ];
    },

    getRandom: (key) => {
      if (key == "display") {
        return faker.internet.displayName();
      }
      if (key == "rank_dir") {
        return ["asc", "desc"][Math.floor(Math.random() * 2)];
      }
      if (key == "public") {
        return [true, false][Math.floor(Math.random() * 2)];
      }
      if (key == "external_id") {
        return faker.internet.userName();
      }
      if (key == "image") {
        return "";
      }
      if (key == "extra") {
        return {};
      }
      return null;
    },
  };
};

test("achievement leaderboard default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.achievement.leaderboard({
    achievementId: setup.getValue("achievement_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("achievement record default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.achievement.record({
    achievementId: setup.getValue("achievement_id"),
    participantId: setup.getRandom("participant_id"),
    value: setup.getRandom("value"),
    recorded: setup.getRandom("recorded"),
  });

  expect(result).toBeDefined();
}, 1000);

test("participant progress default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.participant.progress({
    participantId: setup.getValue("participant_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("participant scores default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.participant.scores({
    participantId: setup.getValue("participant_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("scoreboard record default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.scoreboard.record({
    scoreboardId: setup.getValue("scoreboard_id"),
    participantId: setup.getRandom("participant_id"),
    value: setup.getRandom("value"),
    recorded: setup.getRandom("recorded"),
  });

  expect(result).toBeDefined();
}, 1000);

test("scoreboard scores default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.scoreboard.scores({
    scoreboardId: setup.getValue("scoreboard_id"),
    from: "",
    to: "",
  });

  expect(result).toBeDefined();
}, 1000);

test("achievement list default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.achievement.list({
    projectId: setup.getValue("project_id"),
    limit: "",
    offset: "",
  });

  expect(result).toBeDefined();
}, 1000);

test("achievement create default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.achievement.create({
    projectId: setup.getValue("project_id"),
    display: setup.getRandom("display"),
    goal: setup.getRandom("goal"),
    repeats: setup.getRandom("repeats"),
    lockedImage: setup.getRandom("locked_image"),
    unlockedImage: setup.getRandom("unlocked_image"),
    position: setup.getRandom("position"),
    public_: setup.getRandom("public"),
    extra: setup.getRandom("extra"),
  });

  expect(result).toBeDefined();
}, 1000);

test("achievement read default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.achievement.read({
    achievementId: setup.getValue("achievement_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("achievement update default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.achievement.update({
    achievementId: setup.getValue("achievement_id"),
    display: setup.getRandom("display"),
    goal: setup.getRandom("goal"),
    repeats: setup.getRandom("repeats"),
    lockedImage: setup.getRandom("locked_image"),
    unlockedImage: setup.getRandom("unlocked_image"),
    position: setup.getRandom("position"),
    public_: setup.getRandom("public"),
    extra: setup.getRandom("extra"),
  });

  expect(result).toBeDefined();
}, 1000);

test("achievement delete default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.achievement.delete({
    achievementId: setup.getValue("achievement_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("participant list default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.participant.list({
    projectId: setup.getValue("project_id"),
    limit: "",
    offset: "",
  });

  expect(result).toBeDefined();
}, 1000);

test("participant create default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.participant.create({
    projectId: setup.getValue("project_id"),
    display: setup.getRandom("display"),
    externalId: setup.getRandom("external_id"),
    image: setup.getRandom("image"),
    extra: setup.getRandom("extra"),
  });

  expect(result).toBeDefined();
}, 1000);

test("participant read default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.participant.read({
    participantId: setup.getValue("participant_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("participant update default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.participant.update({
    participantId: setup.getValue("participant_id"),
    display: setup.getRandom("display"),
    externalId: setup.getRandom("external_id"),
    image: setup.getRandom("image"),
    extra: setup.getRandom("extra"),
  });

  expect(result).toBeDefined();
}, 1000);

test("participant delete default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.participant.delete({
    participantId: setup.getValue("participant_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("scoreboard list default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.scoreboard.list({
    projectId: setup.getValue("project_id"),
    limit: "",
    offset: "",
  });

  expect(result).toBeDefined();
}, 1000);

test("scoreboard create default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.scoreboard.create({
    projectId: setup.getValue("project_id"),
    display: setup.getRandom("display"),
    rankDir: setup.getRandom("rank_dir"),
    public_: setup.getRandom("public"),
    extra: setup.getRandom("extra"),
  });

  expect(result).toBeDefined();
}, 1000);

test("scoreboard read default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.scoreboard.read({
    scoreboardId: setup.getValue("scoreboard_id"),
  });

  expect(result).toBeDefined();
}, 1000);

test("scoreboard update default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.scoreboard.update({
    scoreboardId: setup.getValue("scoreboard_id"),
    display: setup.getRandom("display"),
    rankDir: setup.getRandom("rank_dir"),
    public_: setup.getRandom("public"),
    extra: setup.getRandom("extra"),
  });

  expect(result).toBeDefined();
}, 1000);

test("scoreboard delete default happy path", async () => {
  const setup = await Setup();
  expect(setup.apiKey).toBeDefined();
  expect(setup.db).toBeDefined();

  const result = await setup.client.scoreboard.delete({
    scoreboardId: setup.getValue("scoreboard_id"),
  });

  expect(result).toBeDefined();
}, 1000);

