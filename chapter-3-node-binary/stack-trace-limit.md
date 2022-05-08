## Stack trace limit
by default the stack trace will contain JUST the las 10 function calls
to modify the stack trace limit --stack-trace-limit can be used

```
 node stack-trace.js
/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:3
  if(n === 0) throw Error('error');
              ^

Error: error
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:3:21)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
```
and
```
 node --stack-trace-limit=11 stack-trace.js
/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:3
  if(n === 0) throw Error('error');
  ...            ^
Error: error
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:3:21)
    at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
  at fn (/home/ivan/Codigo/lfw211-preparation/chapter-1-node-binary/stack-trace.js:4:3)
  ```

