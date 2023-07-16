# 
implicit instantiations
```c++
ArrayTP<int, 100> stuff; // implicit instantiation
```
explicit instantiations
```c++
template class ArrayTP<string, 100>; // generate ArrayTP<string, 100> class
```
explicit specializations
```c++
template <> class Classname<specialized-type-name> { ... };
```
```c++
template <> class SortedArray<const char char *>  
{  
	...// details omitted  
};

SortedArray<int> scores; // use general definition
SortedArray<const char *> dates; // use specialized definition
```

partial specialization
```c++
//general template
template <class T1, class T2> class Pair { ... };
//specialization with T2 set to int
template <class T1> class Pair<T1, int> { ... };
```

2022/05/06::19:58
