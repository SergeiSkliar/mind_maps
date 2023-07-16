2021/12/19::22:26
Tags: #
__
# friends
keyword `friend` specifies that some function (or class) which is not a part of a class can access private data of  that class.
[[friend function]]
`friend` can be a class

```c++
class Window_mgr{

};
class Screen{
friend class Window_mgr;
}
```

or a specific member of a class
```c++
class Window_mgr{

};
class Screen{
friend void Window_mgr::clear();
}
```
NB: in case of making a member function a friend it is necessary to follow this order:
- define  `Window_mgr` with `clear` declaration, but NOT definition.
- define `Screen` class with `friend` declaration of `clear`
- define `clear`

__
### Zero-Links
-
__
### Links
-