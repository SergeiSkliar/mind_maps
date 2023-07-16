2022/02/08::22:48
Tags: #
__
# NDEBUG
preprocessore variable
if `NDEBUG` is not defined then preprocessor generate names that can be useful in debugging
```c++
__func__ // name of the function we are debugging
__FILE__ // string literal with name of the file
__LINE__ // integer literal containing the current line number
__TIME__ // string literal containing the time the file was compiled
__DATE__ // string literal containing the date the file was compiled
```

__
### Zero-Links
-
__
### Links
-