#!/usr/bin/env node
import { getUserInput, sendForOutput } from '../src/cli.js';

sendForOutput('Welcome to the Brain Games!');
const userName = getUserInput('May I have your name? ');
sendForOutput(`Hello, ${userName}!`);
