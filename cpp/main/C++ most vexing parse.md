```c++
std::thread my_thread(background_task());
```

compiler interprets this excerpt as a function declaration, not an object definition.

solution:
```c++
std::thread my_thread((background_task())); // the extra parentheses prevent interpretation as a function declaration
std::thread my_thread{background_task()}; // or use uniform initialization syntax
```

