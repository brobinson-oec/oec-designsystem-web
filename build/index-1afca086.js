import { f as filter, n as not, r as raceWith, b as argsOrArgArray } from './index-7ddd6289.js';

function partition(predicate, thisArg) {
    return (source) => [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
}

function race(...args) {
    return raceWith(...argsOrArgArray(args));
}
