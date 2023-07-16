# sequential containers

[[vector]] - flexible-size array. Fast random access. Inserting or deleting elements other than at the back may be slow.
[[deque]] - double-ended queue. Fast random access. Fast insert/delete at front or back.
[[list]] - doubly-linked list. Only bidirectional sequential access. Fast insert/delete at any point.
[[forward_list]] - singly linked list. Only sequential access in one direction. Fast insert/delete at any point.
[[array]] - fixed-size array. Fast random access. Cannot add or remove elements.
[[string]] - container, specifically for characters. Similar to `vector`

[[container adaptors]]

except `array` seq containers supports assign operation and has member function `assign`
```c++
list<string> slist(1);
slist1.assign(10, "Hi");
```

there is also `swap` member
```c++
vector<string> svec1(10);
vector<string> svec2(24);
swap(svec1, svec2); // also svec1.swap(svec2)
```
In case of swap the elements themselves are not swapped, but the internal data structures are. Except for `array` - elements of this container are actually swapped.

`size` returns the number of elements in the container (except `forward_list`). `empty` returns `true` if `size` is zero and `false` otherwise. `max_size` returns the number that is greater than or equal to the number of elements a container can contain. 

![[seq_cont_ops.jpg]]

![[seq_access.jpg]]

![[seq_erase.jpg]]



2022/03/12::12:46
