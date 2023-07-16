# 
takes a reference to a container and returns an insert iterator bound to that container.
```c++
vector<int> vec;
auto it = back_inserter(vec);
*it = 42; // adds one element with value 42

vector<int> vec2;
fill_n(back_inserter(vec), 10, 0); // appends ten elements to vec2 with value 0
```

2022/08/31::18:16
