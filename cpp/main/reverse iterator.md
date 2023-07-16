# 
```c++
rbegin
rend
crbegin
crend
```

![[Pasted image 20220404212620.png]]

to `sort` a container we can pass a pair of reverse iterators

```c++
sort(vec.rbegin(), vec.rend());
```

It is not possible to create a reverse iterator from a `forward_list` or a stream iterator.

2022/04/04::21:23
