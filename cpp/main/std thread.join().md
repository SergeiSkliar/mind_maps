if you need to wait for a thread to complete 
cleans any storage assotiated with thread

call `thread.join()` even in presence of exception:
```c++
try
{
	do_something();
}
catch(...)
{
	t.join();
	throw;
}
t.join();
```
or in class:
```c++
class thread_guard
{
	std::thread& t;
public:
	explicit thread_guard(std::thread& t_) : t(t_) {}
	~thread_guard()
	{
		if (t.joinable())
			t.join();
	}
	thread_guard(thread_guard const&) = delete;
	thread_guard operator=(thread_guard const&) = delete;
}
struct func;
void f()
{
	int some_state = 0;
	func my_func(some_state);
	std::thread t(my_func);
	thread_guard g(t);
	do_something();
}
```