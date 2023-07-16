# 
```c++

class Worker {};
class Singer : public Worker {};
class Waiter : public Worker {};
class SingerWaiter : public Singer, public Waiter {};
```
This example expose one of the problems with [[multiple inheritance]]:
class `SingerWaiter` now have two instances of `Worker` objects.

class can be inherited as `virtual`
[[virtual base class]]


2022/05/04::22:37
