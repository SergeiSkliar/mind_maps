# 
`bind` - general-purpose adaptor. It takes a callable object and generates a new callable that "adapts" the parameter list

```c++
auto newCallable = bind(callable, arg_list);
```

```c++
auto wc = find_if(words.begin(), words.end(), bind(check_size, _1, sz));
```

`_1, _2, ... _n` are placeholders, which defined in a namespace [[placeholders]]

2022/03/29::19:38
