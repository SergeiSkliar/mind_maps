

```python
from conans import ConanFile, CMake

class Example(ConanFile):
	name = "Example"
	version = "1.0"
	settings = "os", "compiler", "build_type", "arch"
	generators = "cmake", "cmake_find_package"
	#requires =[]
```

[[conan steps to install]]
