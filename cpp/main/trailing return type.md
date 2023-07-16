# 
```c++
auto f2(double,int) -> double;
```

works best with [[decltype]]
```c++
template<typename T, typename U>
auto eff(T t, U u) -> decltype(T*U)
{
...
}
```

2022/05/25::15:58
