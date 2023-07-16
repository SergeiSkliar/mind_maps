# assignment

obliterates an object's current value and replaces that value with a new one

```c++
int i;
i = 1;
```

copy assignment:
```c++
Useless & operator=(const Useless & f); // copy assignment

// implementation
Useless & Useless::operator=(const Useless & f) // copy assignment  
{  
	std::cout << "copy assignment operator called:\n";  
	if (this == &f)  
		return *this;  
	delete [] pc;  
	n = f.n;  
	pc = new char[n];  
	for (int i = 0; i < n; i++)  
		pc[i] = f.pc[i];  
	return *this;  
}
```

move assignment:
```c++
Useless & operator=(Useless && f); // move assignment

// implementation
Useless & Useless::operator=(Useless && f) // move assignment  
{  
	std::cout << "move assignment operator called:\n";  
	if (this == &f)
		return *this;  
	delete [] pc;  
	n = f.n;  
	pc = f.pc;  
	f.n = 0;  
	f.pc = nullptr;  
	return *this;  
}
```


forced move assignment (works only if move assignment operator defined for `Useless`):
```c++
// use std::move() from utility header
#include <utility>
/* code for Useless class */

int main(){
	Useless one, two;
	/** some code */
	two = std::move(one);
}
```
2022/02/23::14:02
