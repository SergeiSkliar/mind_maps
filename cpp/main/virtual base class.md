
# 
```c++
class Singer : virtual public Worker {};
class Wiater : public virtual Worker {};
```
in this case the `SingerWiater` will contain only one copy of `Worker` object.

also constructor of the derived class should explicitly invoke virtual base class constructor.
```c++
SingerWaiter(const Worker& wk, int p = 0, int v = Singer::other)
	: Worker(wk), Singer(wk, v), Waiter(wk,p) {}
```

2022/05/05::20:21
