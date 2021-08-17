/**
 * watch: {
 *    xxx() {},
 *    yyy() {}
 * }
 */
import Watcher from './watcher';

export default function watch(getter, cb) {
    new Watcher(getter, {watch: true, cb})
}