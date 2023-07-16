# 
```c++
alg(beg, end, other_args);
alg(beg, end, dest, other_args);
alg(beg, end, beg2, other_args);
alg(beg, end, beg2, end2, other_args);
```

## single destination iterator
algorithms with single destination paremeter assumes that it is safe to write as many elements as needed.
more commonly `dest` is bound to insert iterator or `ostream_iterator`

## with a second input sequence
`beg2` and 
`beg2`/`end2` - [beg, end) with [beg2, end2)

algorithms that takes only `beg2` assumes that the range starting with `beg2` is at least as large as `beg` and `end`


2022/04/06::20:34
