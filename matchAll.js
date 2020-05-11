// Take verbs from all words which ends with 'ing'

const test = "climbing, oranges, jumping, flying, carrot";

const regex = /([a-z]*)ing/g;

const matches = [...test.matchAll(regex)];

const result = matches.map(match => match[1]);

result;
