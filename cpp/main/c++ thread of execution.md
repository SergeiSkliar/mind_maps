[[std thread]]

example:
```c++
#include <thread>

void threadFunction(int i, double d, const std::string& s)
{
	std::cout << i << ", " << d << ", " << s << std::endl;
}

int main()
{
	std::thread thr { threadFunction, 1, 2.34, "example"};
	thr.join();
}
```