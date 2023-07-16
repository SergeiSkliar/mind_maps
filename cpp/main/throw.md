# 
essentialy `throw` is a jump to another part of the program

`throw` transfers execution all the way to the first function having a `try-catch` that catches the exception.

when throwing an exception compiler always creates a temporary copy
```c++
class problem {...};  
...  
void super() throw (problem)  
{  
...  
	if (oh_no)  
	{  
		problem oops; // construct object  
		throw oops; // throw it  
...  
}  
...  
try {  
	super();  
}  
catch(problem & p)  
{  
// statements  
}
```

`oops` no longer exists after `super()` terminates - so, the copy is used.

[[ellipsis]] can be catched:
```c++
catch (...) { // do something }
```

2022/05/13::20:02
