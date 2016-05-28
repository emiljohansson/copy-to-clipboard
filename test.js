import test from 'ava';
import copyToClipboard from './';
import child_process from 'child_process'
const exec = child_process.exec;

test('exist', t => {
    const actual = typeof copyToClipboard;
    const expected = 'function';
    t.is(actual, expected);
});

test.cb('copies the text', t => {
    var expected = 'bar';
    copyToClipboard(expected, () => {
        exec('pbpaste', (error, actual) => {
            t.is(actual, expected);
            t.end();
        });
    });
});
