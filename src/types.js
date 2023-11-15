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

class User {
  constructor(userId, email, display, created, updated) {
    this.userId = userId;
    this.email = email;
    this.display = display;
    this.created = created;
    this.updated = updated;
  }
}

class Project {
  constructor(projectId, userId, display, created, updated, extra) {
    this.projectId = projectId;
    this.userId = userId;
    this.display = display;
    this.created = created;
    this.updated = updated;
    this.extra = extra;
  }
}

class ApiKey {
  constructor(
    apiKeyId,
    projectId,
    display,
    capability,
    deactivated,
    lastUsed,
    created,
    updated,
  ) {
    this.apiKeyId = apiKeyId;
    this.projectId = projectId;
    this.display = display;
    this.capability = capability;
    this.deactivated = deactivated;
    this.lastUsed = lastUsed;
    this.created = created;
    this.updated = updated;
  }
}

class Achievement {
  constructor(
    achievementId,
    projectId,
    display,
    goal,
    repeats,
    lockedImage,
    unlockedImage,
    position,
    public,
    created,
    updated,
    extra,
  ) {
    this.achievementId = achievementId;
    this.projectId = projectId;
    this.display = display;
    this.goal = goal;
    this.repeats = repeats;
    this.lockedImage = lockedImage;
    this.unlockedImage = unlockedImage;
    this.position = position;
    this.public = public;
    this.created = created;
    this.updated = updated;
    this.extra = extra;
  }
}

class Participant {
  constructor(
    participantId,
    projectId,
    display,
    externalId,
    image,
    created,
    updated,
    extra,
  ) {
    this.participantId = participantId;
    this.projectId = projectId;
    this.display = display;
    this.externalId = externalId;
    this.image = image;
    this.created = created;
    this.updated = updated;
    this.extra = extra;
  }
}

class Scoreboard {
  constructor(
    scoreboardId,
    projectId,
    display,
    rankDir,
    public,
    created,
    updated,
    extra,
  ) {
    this.scoreboardId = scoreboardId;
    this.projectId = projectId;
    this.display = display;
    this.rankDir = rankDir;
    this.public = public;
    this.created = created;
    this.updated = updated;
    this.extra = extra;
  }
}

class Progress {
  constructor(progressId, achievementId, participantId, value, recorded) {
    this.progressId = progressId;
    this.achievementId = achievementId;
    this.participantId = participantId;
    this.value = value;
    this.recorded = recorded;
  }
}

class Score {
  constructor(scoreId, scoreboardId, participantId, value, recorded) {
    this.scoreId = scoreId;
    this.scoreboardId = scoreboardId;
    this.participantId = participantId;
    this.value = value;
    this.recorded = recorded;
  }
}

class AchievementLeaderboardItem {
  constructor(participant, progress, iterations) {
    this.participant = participant;
    this.progress = progress;
    this.iterations = iterations;
  }
}

class ParticipantProgressItem {
  constructor(achievement, progress, iterations) {
    this.achievement = achievement;
    this.progress = progress;
    this.iterations = iterations;
  }
}

class ParticipantScoreItem {
  constructor(scoreboard, rank, total) {
    this.scoreboard = scoreboard;
    this.rank = rank;
    this.total = total;
  }
}

class ScoreboardScoreItem {
  constructor(participantId, participant, rank, total) {
    this.participantId = participantId;
    this.participant = participant;
    this.rank = rank;
    this.total = total;
  }
}

class AchievementLeaderboardResponse {
  constructor(achievementLeaderboard) {
    this.achievementLeaderboard = achievementLeaderboard;
  }
}

class AchievementProgressResponse {
  constructor(insertProgressOne) {
    this.insertProgressOne = insertProgressOne;
  }
}

class ParticipantProgressResponse {
  constructor(participantProgress) {
    this.participantProgress = participantProgress;
  }
}

class ParticipantScoresResponse {
  constructor(participantScores) {
    this.participantScores = participantScores;
  }
}

class ScoreboardScoreResponse {
  constructor(insertScoreOne) {
    this.insertScoreOne = insertScoreOne;
  }
}

class ScoreboardScoresResponse {
  constructor(scoreboardScores) {
    this.scoreboardScores = scoreboardScores;
  }
}

class AchievementProgressRequest {
  constructor(participantId, value, recorded) {
    this.participantId = participantId;
    this.value = value;
    this.recorded = recorded;
  }
}

class ScoreboardScoreRequest {
  constructor(participantId, value, recorded) {
    this.participantId = participantId;
    this.value = value;
    this.recorded = recorded;
  }
}

class AchievementCreateRequest {
  constructor(
    projectId,
    display,
    goal,
    repeats,
    lockedImage,
    unlockedImage,
    position,
    public,
    extra,
  ) {
    this.projectId = projectId;
    this.display = display;
    this.goal = goal;
    this.repeats = repeats;
    this.lockedImage = lockedImage;
    this.unlockedImage = unlockedImage;
    this.position = position;
    this.public = public;
    this.extra = extra;
  }
}

class AchievementCreateResponse {
  constructor(insertAchievementOne) {
    this.insertAchievementOne = insertAchievementOne;
  }
}

class AchievementReadResponse {
  constructor(achievement) {
    this.achievement = achievement;
  }
}

class AchievementUpdateRequest {
  constructor(
    display,
    goal,
    repeats,
    lockedImage,
    unlockedImage,
    position,
    public,
    extra,
  ) {
    this.display = display;
    this.goal = goal;
    this.repeats = repeats;
    this.lockedImage = lockedImage;
    this.unlockedImage = unlockedImage;
    this.position = position;
    this.public = public;
    this.extra = extra;
  }
}

class AchievementUpdateResponse {
  constructor(updateAchievementByPk) {
    this.updateAchievementByPk = updateAchievementByPk;
  }
}

class AchievementDeleteResponse {
  constructor(deleteAchievementByPk) {
    this.deleteAchievementByPk = deleteAchievementByPk;
  }
}

class AchievementListResponse {
  constructor(achievement) {
    this.achievement = achievement;
  }
}

class ParticipantCreateRequest {
  constructor(projectId, display, externalId, image, extra) {
    this.projectId = projectId;
    this.display = display;
    this.externalId = externalId;
    this.image = image;
    this.extra = extra;
  }
}

class ParticipantCreateResponse {
  constructor(insertParticipantOne) {
    this.insertParticipantOne = insertParticipantOne;
  }
}

class ParticipantReadResponse {
  constructor(participant) {
    this.participant = participant;
  }
}

class ParticipantUpdateRequest {
  constructor(display, externalId, image, extra) {
    this.display = display;
    this.externalId = externalId;
    this.image = image;
    this.extra = extra;
  }
}

class ParticipantUpdateResponse {
  constructor(updateParticipantByPk) {
    this.updateParticipantByPk = updateParticipantByPk;
  }
}

class ParticipantDeleteResponse {
  constructor(deleteParticipantByPk) {
    this.deleteParticipantByPk = deleteParticipantByPk;
  }
}

class ParticipantListResponse {
  constructor(participant) {
    this.participant = participant;
  }
}

class ScoreboardCreateRequest {
  constructor(projectId, display, rankDir, public, extra) {
    this.projectId = projectId;
    this.display = display;
    this.rankDir = rankDir;
    this.public = public;
    this.extra = extra;
  }
}

class ScoreboardCreateResponse {
  constructor(insertScoreboardOne) {
    this.insertScoreboardOne = insertScoreboardOne;
  }
}

class ScoreboardReadResponse {
  constructor(scoreboard) {
    this.scoreboard = scoreboard;
  }
}

class ScoreboardUpdateRequest {
  constructor(display, rankDir, public, extra) {
    this.display = display;
    this.rankDir = rankDir;
    this.public = public;
    this.extra = extra;
  }
}

class ScoreboardUpdateResponse {
  constructor(updateScoreboardByPk) {
    this.updateScoreboardByPk = updateScoreboardByPk;
  }
}

class ScoreboardDeleteResponse {
  constructor(deleteScoreboardByPk) {
    this.deleteScoreboardByPk = deleteScoreboardByPk;
  }
}

class ScoreboardListResponse {
  constructor(scoreboard) {
    this.scoreboard = scoreboard;
  }
}

