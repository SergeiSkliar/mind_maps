# 
```c++
class Class {
private: 
	int n;
	char * p;
public:
	Class(Class && f);
};

Class::Class(Class && f) : n(f.n) {
	p = f.p;
	f.p = nullptr; // give old object nothing in return
	f.n = 0;
}
```

2022/05/27::18:56
