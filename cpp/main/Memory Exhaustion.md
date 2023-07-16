Although modern machines tend to have huge memory capacity, it is always possible  
that the free store will be exhausted. 
Once a program has used all of its available memory, `new` expressions will fail. 
By default, if `new` is unable to allocate the requested storage, it throws an exception of type `bad_alloc`.

We can prevent `new` from throwing an exception by using a different form of `new`:
```c++
int *p1 = new (nothrow) int;
```

also known as [[c++ placement new]]

