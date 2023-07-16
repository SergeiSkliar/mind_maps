# 
Objects cannot be created from a class with pure virtual function.
pure virtual function has a `= 0` at the end of its declaration.

```c++
class BaseClass {
private:
	/*members*/
public:
	virtual double foo() const = 0;
};
```

2022/04/13::22:19
