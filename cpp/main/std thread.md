Once started a thread you need to explicitly decide whether to wait for it to finish or leave it to run on its own.


```c++
void do_some_work();  
std::thread my_thread(do_some_work);

class background_task  
{  
public:  
void operator()() const  
{  
do_something();  
do_something_else();  
}  
};  
background_task f;  
std::thread my_thread(f); // class instance can also be passed
// lambda
std::thread my_thread([]{  
	do_something();  
	do_something_else();  
});

```

[[std thread.join()]]
[[std thread.detach()]]


[[C++ most vexing parse]]:
```c++
std::thread my_thread(background_task()); 
```