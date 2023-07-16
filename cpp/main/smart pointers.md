# 

PROPER USE:
- don't use the same built-in pointer to initialize (or `reset`) more than one smart pointer
- don't delete the pointer returned from `get()`
- don't use `get()` to initialize or `reset` another smart pointer
- if you use a pointer returned by `get()`, remember that the pointer becomes invalid when the last corresponding smart pointer goes away
- if you use a smart pointer to manage the resource other than memory allocated by `new`, remember to pass a deleter 

header [[memory header]]
[[auto_ptr]]
[[unique_ptr]]
[[shared_ptr]]
[[weak_ptr]]


unique_ptr (doesn't have implicit type conversion)
`std::unique_ptr<Entitiy> ent(new Entity());`
`std::unique_ptr<Entity> ent2 = std::make_unique<Entity>();`

DON'T DO THAT:
```c++
string vacation("I wandered lonely as a cloud.");
shared_ptr<string> pvac(&vacation);
```
REASON: `delete` will be applied to non-heap memory.

2022/05/17::19:31
