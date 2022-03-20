# 🤖 testing-library-codegen 🤖

Testing-library-codegen is a tool where can detect and generate the test files for you by analyzing the JSX or TSX file.


# The Problem

When it comes to testing a React application, Developers spend good amount of time rewriting the same boilerplate code. 

# The Solution
Goal of this package is to help developers 
to improve productiviy. Let them foucs on the real test. Testing-library-codegen will take care of the basics. 



The test file will contain empty tests by statically analyzing the code,behaving like a coverage tool by figuring out all the ways it could be run (e.g. isCool needs to be true to go in this if statement)

It can't actually build functional tests or figure out what they're supposed to output, but it could at least provide some sort of boilerplate to manually verify.

Example input.js:
```
export default function (sayHello) {
    if(sayHello) {
        return 'hello';
    }
}
export function strLength (str) {
    return str.length;
}
```
Example generated-tests.js:
```
import test from 'ava';
import camelizedModuleName, {strLength} from '.';

test('return undefined',t => {
    t.same(camelizedModuleName(), undefined);
});

test('return hello', t => {
    t.same(camelizedModuleName(true), 'hello');
});

test(TBD, t => { // "TBD" would be something the dev would have to replace
    t.same(strLength(TBD), TBD);
});
```
