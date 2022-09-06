import { g as filter, n as not, r as raceWith, h as argsOrArgArray } from './index-b7be4d6b.js';

function partition(predicate, thisArg) {
    return (source) => [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
}

function race(...args) {
    return raceWith(...argsOrArgArray(args));
}
