# 
wrapper, which provides a way to handle several function-like forms uniformly.
declaret in [[functional]] header

```c++
std::function<double(char,int)> fdci;
```
You can then assign to `fdci` any function pointer, function object, or lambda expression that takes type `char` and `int` arguments and returns type `double`.


2022/06/06::22:30
