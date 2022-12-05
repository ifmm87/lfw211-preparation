import { EventEmitter, once } from 'events';
const emitter = new EventEmitter();
const ac =new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Waiting for the event was cancelled')
    } else {
      console.log('an error happened');
    }
  }
}
foo(emitter, 'event', ac.signal);
ac.abort();
emitter.emit('event')
