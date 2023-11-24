vements = require ('../dist/vements.cjs');

const API_KEY       = "";
const PROJECT_ID    = "";
const SCOREBOARD_ID = "";


const main = () => {
    const config = vements.Config.default();
    const client = vements.Client({apiKey: API_KEY, config: config});

    console.info(client);
}


main();


