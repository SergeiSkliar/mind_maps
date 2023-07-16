# vector

`#include <vector>`
collection of objects of the same type.
vector template class is a [[dynamic]] array.

elements of `vector` stored contiguously. i.e., adding new element anywhere except for the end of the `vector` can be very expensive.

```c++
std::vector<int> vi;
int n;
std::cin >> n;
std::vector<double> dv(n);
```

general form:
`std::vector<typeName> varName(num_elements);`

![[vec_size.jpg]]
`reserve` does not change the number of elements in the container; it affects only how much memory the `vector` preallocates.
![[string_constructors.jpg]]

`s.substr(pos, n)` returns a `string` containing `n` characters from `s` starting at `pos`.

![[string_mod.jpg]]

2021/08/25::21:00

