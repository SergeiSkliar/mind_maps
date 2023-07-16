shared_ptr

`shared_ptr<int> p1;`
`shared_ptr<lit<int>> p2;`

`p->mem` == `(*p).mem`
`p.get()`

uses reference count

DON'T DO THAT:
```c++
string vacation("I wandered lonely as a cloud.");
shared_ptr<string> pvac(&vacation);
```
REASON: `delete` will be applied to non-heap memory.

```c++
StrBlob::StrBlob(initializer_list<string> il):  
			data(make_shared<vector<string>>(il)) { }
```

