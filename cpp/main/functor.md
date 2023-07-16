# 
a functor is an object that can be used with `()` in the manner of a function.

```c++
class Linear {
private:
	double slope;
	double y0;
public:
	Linear(double sl_ = 1, double y_ = 0) : slope(sl_), y0(y_) {}
	double operator()(double x) { return y0 + slope * x; }
}
double y1 = f1(12.5); // right-hand side is f1.operator()(12.5)
```

```c++
class f_mod  
{  
private:  
	int dv;  
public:  
	f_mod(int d = 1) : dv(d) {}  
	bool operator()(int x) {return x % dv == 0;}  
};

f_mod obj(3); // f_mod.dv set to 3
bool is_div_by_3 = obj(7); // same as obj.operator()(7)
```


2022/05/30::23:30
