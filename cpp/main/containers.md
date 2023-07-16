# containers
[[sequential containers]]
[[associative containers]]

[[valarray]]

ALL containers support the equality operators `==` and `!=`. Except for unordered [[associative containers]] all the containers support relational operators `>`, `<`, `>=` and `<=`.
Container elements are copies.

 iterators.
 iterator range - pair of iterators each of which refers to an element, or to one past the last element, in the same container.
left-inclusive interval:
`[ begin, end )` - including `first` element, but not including `last` (because the `last` is not part of the container).

two iterators form a range if:
- they refer to the elements of, or one past the last element, of the same container AND
- `end` can be reached by incrementing `begin`. i.e. `end` cannot precede `begin`.

container can be copied into another container. For that, the container type and element type must match.
or we can copy a range of elements denoted by a pair of iterators.

```c++
vector<const char*> articles = {"a", "an", "the"};
forward_list<string> words(articles.begin(), articles.end());
```

the containers that take a _size_ are valid _only_ for sequential containers; the are not supported for the [[associative containers]].

Comparing two containers performs a pairwise comparison of the elements.

![[cont_ops.jpg]]
![[cont_ops2.jpg]]
2022/03/14::12:55
