# insert iterator
adds new element with a right-hand value into a container.
header [[iterator]]

```c++
vector<int> vec;
auto it = back_inserter(vec);
*it = 42; // adds one element with value 42

vector<int> vec2;
fill_n(back_inserter(vec), 10, 0); // appends ten elements to vec2 with value 0
```

![[insert_it_ops.jpg]]

[[std back_inserter]] - creates an iterator that uses `push_back`
`front_inserter` - creates an iterator that uses `push_front`
`inserter` - creates an iterator that uses `insert`. elements inserted ahead of the element denoted by the given iterator.


2022/03/22::21:34
