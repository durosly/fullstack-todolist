import Airtable from "airtable";

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_TOKEN_KEY
});

const base = Airtable.base('appKoYB2UUL6LhJoC');

export { base }