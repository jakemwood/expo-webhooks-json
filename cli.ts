#!/usr/bin/env node

import { listAsync } from "./expo";
import { Command } from 'commander';

async function main(url?: string) {
    const results = await listAsync(".");
    if (results.length > 0) {
        if (url) {
            const urlMatches = results.filter(wh => wh.url === url);
            if (urlMatches.length > 0) {
                console.log(urlMatches[0].id);
            }
        }
        else {
            console.log(JSON.stringify(results));
        }
    }
}

const program = new Command();
program.version('1.0.0');
program.option('-u, --url <url>', 'URL of the webhook you are interested in');
program.parse(process.argv);
main(program.url);
