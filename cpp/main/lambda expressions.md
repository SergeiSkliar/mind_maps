# lambda expressions

a callable unit of code. consider it as an unnamed, inline function.

```c++
[capture list] (parameter list) -> return type {function body}
```

capture list is a list of local variables defined in the enclosing function.

```c++
auto f = [] {return 42;};
cout << f();


[](const string& a, const string& b) { return a.size() < b.size();}
```

when we define a lambda, the compiler generates new (unnamed) class. i.e. it generates a new type AND an object of that type.

lambda captures by value or by reference.

```c++
void func(){
	size_t v1 = 42;
	auto f = [v1] {return v1;};
	v1 = 0;
	auto j = f(); // j is 42; f stored a copy of v1 when we created it
}
void func2(){
	size_t v2 = 42;
	auto f2 = [&v2] {return v2;};
	v2 = 0;
	auto j2 = f2(); // j2 is 0;
}
```



![[lambda_capture_list 1.jpg]]

2022/03/23::21:20
