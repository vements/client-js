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

const { Command, InvalidArgumentError } = require("commander");

export const CLI = (config, client, args) => {
  const program = new Command();
  program.name("vements");

  program.option("-v, --verbose", "", parse.verbosity, 0);

  const apiVersion = new Command("api-version");
  program.addCommand(apiVersion);

  apiVersion.description("print api version").action(() => {
    console.log(config.version);
  });

  const clientVersion = new Command("client-version");
  program.addCommand(clientVersion);

  clientVersion.description("print client version").action(() => {
    console.log("0.0.1");
  });

  const achievement = new Command("achievement");
  program.addCommand(achievement);

  achievement
    .description("Achievement operations")
    .summary("achievement operations");

  // achievement "leaderboard" subcommand
  achievement
    .command("leaderboard")
    .description("Achievement leaderboard")
    .requiredOption(
      "--achievement-id <achievement-id>",
      "achievement id",
      parse.string,
    )
    .action((args) => {
      client.achievement
        .leaderboard({
          achievementId: args.achievementId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // achievement "record" subcommand
  achievement
    .command("record")
    .description("Record achievement progress")
    .requiredOption(
      "--achievement-id <achievement-id>",
      "achievement id",
      parse.string,
    )
    .requiredOption(
      "--participant-id <participant-id>",
      "participant id",
      parse.string,
    )
    .requiredOption("--value <value>", "value", parse.integer)
    .requiredOption("--recorded <recorded>", "recorded", parse.string)
    .action((args) => {
      client.achievement
        .record({
          achievementId: args.achievementId,
          participantId: args.participantId,
          value: args.value,
          recorded: args.recorded,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // achievement "list" subcommand
  achievement
    .command("list")
    .description("List achievements")
    .requiredOption("--project-id <project-id>", "project id", parse.string)
    .requiredOption("--limit <limit>", "limit", parse.integer)
    .requiredOption("--offset <offset>", "offset", parse.integer)
    .action((args) => {
      client.achievement
        .list({
          projectId: args.projectId,
          limit: args.limit,
          offset: args.offset,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // achievement "create" subcommand
  achievement
    .command("create")
    .description("Create achievement")
    .requiredOption("--project-id <project-id>", "project id", parse.string)
    .requiredOption("--display <display>", "display", parse.string)
    .requiredOption("--goal <goal>", "goal", parse.integer)
    .requiredOption("--repeats <repeats>", "repeats", parse.integer)
    .requiredOption(
      "--locked-image <locked-image>",
      "locked image",
      parse.string,
    )
    .requiredOption(
      "--unlocked-image <unlocked-image>",
      "unlocked image",
      parse.string,
    )
    .requiredOption("--position <position>", "position", parse.integer)
    .requiredOption("--public <public>", "public", parse.boolean)
    .requiredOption("--extra <extra>", "extra", parse.object)
    .action((args) => {
      client.achievement
        .create({
          projectId: args.projectId,
          display: args.display,
          goal: args.goal,
          repeats: args.repeats,
          lockedImage: args.lockedImage,
          unlockedImage: args.unlockedImage,
          position: args.position,
          public_: args.public_,
          extra: args.extra,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // achievement "read" subcommand
  achievement
    .command("read")
    .description("Read achievement")
    .requiredOption(
      "--achievement-id <achievement-id>",
      "achievement id",
      parse.string,
    )
    .action((args) => {
      client.achievement
        .read({
          achievementId: args.achievementId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // achievement "update" subcommand
  achievement
    .command("update")
    .description("Update achievement")
    .requiredOption(
      "--achievement-id <achievement-id>",
      "achievement id",
      parse.string,
    )
    .requiredOption("--display <display>", "display", parse.string)
    .requiredOption("--goal <goal>", "goal", parse.integer)
    .requiredOption("--repeats <repeats>", "repeats", parse.integer)
    .requiredOption(
      "--locked-image <locked-image>",
      "locked image",
      parse.string,
    )
    .requiredOption(
      "--unlocked-image <unlocked-image>",
      "unlocked image",
      parse.string,
    )
    .requiredOption("--position <position>", "position", parse.integer)
    .requiredOption("--public <public>", "public", parse.boolean)
    .requiredOption("--extra <extra>", "extra", parse.object)
    .action((args) => {
      client.achievement
        .update({
          achievementId: args.achievementId,
          display: args.display,
          goal: args.goal,
          repeats: args.repeats,
          lockedImage: args.lockedImage,
          unlockedImage: args.unlockedImage,
          position: args.position,
          public_: args.public_,
          extra: args.extra,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // achievement "delete" subcommand
  achievement
    .command("delete")
    .description("Delete achievement by id.")
    .requiredOption(
      "--achievement-id <achievement-id>",
      "achievement id",
      parse.string,
    )
    .action((args) => {
      client.achievement
        .delete({
          achievementId: args.achievementId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });
  const participant = new Command("participant");
  program.addCommand(participant);

  participant
    .description("Participant operations")
    .summary("participant operations");

  // participant "progress" subcommand
  participant
    .command("progress")
    .description("Participant progress")
    .requiredOption(
      "--participant-id <participant-id>",
      "participant id",
      parse.string,
    )
    .action((args) => {
      client.participant
        .progress({
          participantId: args.participantId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // participant "scores" subcommand
  participant
    .command("scores")
    .description("Participant scores")
    .requiredOption(
      "--participant-id <participant-id>",
      "participant id",
      parse.string,
    )
    .action((args) => {
      client.participant
        .scores({
          participantId: args.participantId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // participant "list" subcommand
  participant
    .command("list")
    .description("List participants")
    .requiredOption("--project-id <project-id>", "project id", parse.string)
    .requiredOption("--limit <limit>", "limit", parse.integer)
    .requiredOption("--offset <offset>", "offset", parse.integer)
    .action((args) => {
      client.participant
        .list({
          projectId: args.projectId,
          limit: args.limit,
          offset: args.offset,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // participant "create" subcommand
  participant
    .command("create")
    .description("Create participant")
    .requiredOption("--project-id <project-id>", "project id", parse.string)
    .requiredOption("--display <display>", "display", parse.string)
    .requiredOption("--external-id <external-id>", "external id", parse.string)
    .requiredOption("--image <image>", "image", parse.string)
    .requiredOption("--extra <extra>", "extra", parse.object)
    .action((args) => {
      client.participant
        .create({
          projectId: args.projectId,
          display: args.display,
          externalId: args.externalId,
          image: args.image,
          extra: args.extra,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // participant "read" subcommand
  participant
    .command("read")
    .description("Read participant")
    .requiredOption(
      "--participant-id <participant-id>",
      "participant id",
      parse.string,
    )
    .action((args) => {
      client.participant
        .read({
          participantId: args.participantId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // participant "update" subcommand
  participant
    .command("update")
    .description("Update participant")
    .requiredOption(
      "--participant-id <participant-id>",
      "participant id",
      parse.string,
    )
    .requiredOption("--display <display>", "display", parse.string)
    .requiredOption("--external-id <external-id>", "external id", parse.string)
    .requiredOption("--image <image>", "image", parse.string)
    .requiredOption("--extra <extra>", "extra", parse.object)
    .action((args) => {
      client.participant
        .update({
          participantId: args.participantId,
          display: args.display,
          externalId: args.externalId,
          image: args.image,
          extra: args.extra,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // participant "delete" subcommand
  participant
    .command("delete")
    .description("Delete participant by id.")
    .requiredOption(
      "--participant-id <participant-id>",
      "participant id",
      parse.string,
    )
    .action((args) => {
      client.participant
        .delete({
          participantId: args.participantId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });
  const scoreboard = new Command("scoreboard");
  program.addCommand(scoreboard);

  scoreboard
    .description("Scoreboard operations")
    .summary("scoreboard operations");

  // scoreboard "record" subcommand
  scoreboard
    .command("record")
    .description("Record a scoreboard score")
    .requiredOption(
      "--scoreboard-id <scoreboard-id>",
      "scoreboard id",
      parse.string,
    )
    .requiredOption(
      "--participant-id <participant-id>",
      "participant id",
      parse.string,
    )
    .requiredOption("--value <value>", "value", parse.integer)
    .requiredOption("--recorded <recorded>", "recorded", parse.string)
    .action((args) => {
      client.scoreboard
        .record({
          scoreboardId: args.scoreboardId,
          participantId: args.participantId,
          value: args.value,
          recorded: args.recorded,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // scoreboard "scores" subcommand
  scoreboard
    .command("scores")
    .description("Scoreboard scores")
    .requiredOption(
      "--scoreboard-id <scoreboard-id>",
      "scoreboard id",
      parse.string,
    )
    .requiredOption("--from <from>", "from", parse.string)
    .requiredOption("--to <to>", "to", parse.string)
    .action((args) => {
      client.scoreboard
        .scores({
          scoreboardId: args.scoreboardId,
          from: args.from,
          to: args.to,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // scoreboard "list" subcommand
  scoreboard
    .command("list")
    .description("List scoreboards")
    .requiredOption("--project-id <project-id>", "project id", parse.string)
    .requiredOption("--limit <limit>", "limit", parse.integer)
    .requiredOption("--offset <offset>", "offset", parse.integer)
    .action((args) => {
      client.scoreboard
        .list({
          projectId: args.projectId,
          limit: args.limit,
          offset: args.offset,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // scoreboard "create" subcommand
  scoreboard
    .command("create")
    .description("Create scoreboard")
    .requiredOption("--project-id <project-id>", "project id", parse.string)
    .requiredOption("--display <display>", "display", parse.string)
    .requiredOption("--rank-dir <rank-dir>", "rank dir", parse.string)
    .requiredOption("--public <public>", "public", parse.boolean)
    .requiredOption("--extra <extra>", "extra", parse.object)
    .action((args) => {
      client.scoreboard
        .create({
          projectId: args.projectId,
          display: args.display,
          rankDir: args.rankDir,
          public_: args.public_,
          extra: args.extra,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // scoreboard "read" subcommand
  scoreboard
    .command("read")
    .description("Read scoreboard")
    .requiredOption(
      "--scoreboard-id <scoreboard-id>",
      "scoreboard id",
      parse.string,
    )
    .action((args) => {
      client.scoreboard
        .read({
          scoreboardId: args.scoreboardId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // scoreboard "update" subcommand
  scoreboard
    .command("update")
    .description("Update scoreboard")
    .requiredOption(
      "--scoreboard-id <scoreboard-id>",
      "scoreboard id",
      parse.string,
    )
    .requiredOption("--display <display>", "display", parse.string)
    .requiredOption("--rank-dir <rank-dir>", "rank dir", parse.string)
    .requiredOption("--public <public>", "public", parse.boolean)
    .requiredOption("--extra <extra>", "extra", parse.object)
    .action((args) => {
      client.scoreboard
        .update({
          scoreboardId: args.scoreboardId,
          display: args.display,
          rankDir: args.rankDir,
          public_: args.public_,
          extra: args.extra,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  // scoreboard "delete" subcommand
  scoreboard
    .command("delete")
    .description("Delete scoreboard by id.")
    .requiredOption(
      "--scoreboard-id <scoreboard-id>",
      "scoreboard id",
      parse.string,
    )
    .action((args) => {
      client.scoreboard
        .delete({
          scoreboardId: args.scoreboardId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.error("ERROR:", response);
        });
    });

  program.parse(args || process.argv);
};

const parse = {
  integer: (value, prev) => {
    const v = parseInt(value, 10);
    if (isNaN(v)) {
      throw new InvalidArgumentError("Not an integer.");
    }
    return v;
  },

  string: (value, prev) => {
    return value;
  },

  boolean: (value, prev) => {
    if ((value || "").toLowerCase() === "true") {
      return true;
    } else if ((value || "").toLowerCase() === "false") {
      return false;
    }
    throw new InvalidArgumentError("Not a boolean.");
  },

  object: (value, prev) => {
    return JSON.parse(value);
  },

  verbosity: (value, previous) => {
    return previous + 1;
  },
};

