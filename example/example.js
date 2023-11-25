vements = require ('../dist/vements.cjs');

const API_KEY       = "";
const PROJECT_ID    = "";
const SCOREBOARD_ID = "";


const main = async () => {
    const player = Math.floor(Math.random() * 1000);

    // Create a new client, which encapsulates the API connection.
    // You can do this once and reuse the object.
    const client = vements.Client({apiKey: API_KEY, config:  vements.Config.default()});

    // Create a participant.  You can do this in your application as needed, 
    // for example, when a new player joins the game.
    const participantResponse = await client.participant.create({
        body: {
            project_id: PROJECT_ID,
            display: `Example Player ${player}`,
            // This is the ID of the player in your application.  
            // It can be any string you want, but it must be unique 
            // within the project.
            external_id: `example player ${player}`,
            // This is the URL of the player's avatar image.  It can be any URL you want,
            // including a data URI.
            image: null,
            extra: null
        },
    });

    const participant = JSON.parse(participantResponse.responseData).insert_participant_one;
    console.info(participant);

    
    // Create scores for this new participant and scoreboard.  
    // You can do this in your application as the player plays the game.

    for (let i = 0; i < 5; i++) { 
        await client.scoreboard.record({
            scoreboard_id: SCOREBOARD_ID,
            body: {
              participant_id: participant.participant_id,
              value: Math.round((Math.random() * 1000)) + 1,
              recorded: new Date().toISOString(),
            },
          });
    }

    // Read the scoreboard and show it.
    const scoreboardScoresResult = await client.scoreboard.scores({
        scoreboard_id: SCOREBOARD_ID,
        from: "",
        to: "",
      });
    const scores = JSON.parse(scoreboardScoresResult.responseData).scoreboard_scores;
    scores.forEach(score => {
        console.info(`Rank: ${score.rank} Player: ${score.participant.display} Total: ${score.total}`);
    });
}


main();
