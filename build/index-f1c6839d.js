import { f as filter, n as not, r as raceWith, g as argsOrArgArray } from './index-c55aa8a2.js';

function partition(predicate, thisArg) {
    return (source) => [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
}

function race(...args) {
    return raceWith(...argsOrArgArray(args));
}
