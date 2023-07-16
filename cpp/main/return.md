2022/02/04::20:06
Tags: #
__
# return

return type can be `void`
multiple values can be returned by vector
```c++
std::vector<T> func(std::vector v1, std::vector v2){
	/* some code*/
	return {v1, v2};
}
```

`cstdlib` header defines two preprocessor variables
```c++
#include <cstdlib>
int main(){
	if (some_failure)
		return EXIT_FAILURE;
	else
		return EXIT_SUCCESS;
}
```

trailing return type. use `->` operator after the parameter list
```c++
auto func(int i) -> int(*)[10];
```

__
### Zero-Links
-
__
### Links
-