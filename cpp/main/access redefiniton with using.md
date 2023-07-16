# 
`using`
instead of wrapping one function call to another
```c++
double Student::sum()
{
	return std::valarray<double>::sum();
}
```

you can add to the public section in class declaration
```c++
using std::valarray<double>::sum;
```

2022/05/04::22:24
