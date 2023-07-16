# literal class
requirements:
- all data members must have literal type
- atleast one contructor must be `constexpr`
- if in-class initializer, the initializer for a member of built-in type must be a constant expression
- the class must use default destructor definition

```c++
class LitType{
public:
	constexpr LitType(int a = 2) : val1(a), val2(a) {}
	constexpr LitType(int a , int b) : val1(a), val2(b) {}

private:
	int val1;
	int val2;
};
```

2022/02/23::14:29
