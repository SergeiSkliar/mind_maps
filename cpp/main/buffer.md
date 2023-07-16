# buffer
when buffer is flushed - that is, it is written to the actual output device or file.
the conditions for flushing:
- the program completes normally. flushing is a part of `return` from `main`
- buffer is flushed when it is full
- explicit flush through using a manipulator such as `endl`
- `unitbuf` manipulator can be used to set the stream's internal state to flush after each output operation
- an output stream is tied to another stream. e.g. `cerr` and `cin` are tied to `cout` - reading `cin` or writing `cerr` flushes `cout`

there are several manipulator for flushing the buffer:
- `endl` - adds a newline character then flushes the buffer
- `flush` - just flushes the buffer adding no data
- `ends` - adds a null character then flushes the buffer

`unitbuf` tells the stream to use `flush` after every subsequent write.
`nounitbuf` restores stream to use normal, system-level buffer flushing

BUFFERS ARE NOT FLUSHED WHEN THE PROGRAM CRASHES.

to tie the streams use `tie` member function:
```c++
cin.tie(cout);
cin.tie(nullptr); // using nullptr unties the streams
```

each stream can be tied to atmost one stream at a time. However, multiple streams can tie themselves to the same `ostream`.

2022/03/08::17:31
