# 
`public` and `protected` members of the base class become `private` members of the derived class.
derived class does not inherit the base-class interface.

`private` inheritance is default.

```c++
class Student : private std::string, private std::valarray<double> // also it is a multiple inheritance
{};
```

access base-class objects
```c++
const string& Student::Name() const
{
	retunr (const string&) *this;
}
```

access base-class friends
```c++
ostream& operator<<(ostream& os, const Student& stu)
{
	os << "Scores for " << (const string&) stu << endl;
}
```

2022/05/04::19:30
