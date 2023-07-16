# static class members
`static` makes a member assiciated with the class, not with an object of the class.
can be defined only once. Good practice is to put the definition inside class implementation .cpp file.

```c++
class Account {
public:
	static double rate() {return interestRate;}
	static void rate(double);
private:
	static double interestRate;
	static double initRate();
	static constexpr int period = 30;
};
```

`static` is used in declaration. It doesn't repeat in definition.

```c++
void Account::rate(double r) {
 interestRate = r;
}
```

Even if `static` member was initialized in the class body it should be defined after that:
```c++
constexpr int Account::period;
```

2022/02/23::21:30
