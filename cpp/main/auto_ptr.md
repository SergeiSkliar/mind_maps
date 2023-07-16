# 
```c++
#inclue <memory>
auto_ptr<double> pd(new double);

// second example, function
void remodel(std::string & str)
{
	std::auto_ptr<std::string> ps (new std::string(str));
	if (weird_thing)
		throw exception();
	str = *ps;
	return;
}
```

2022/05/17::19:33
