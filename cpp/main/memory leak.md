2021/08/16::21:41
Tags: #
__
# memory leak

- don't use `delete` to free memory that `new` didn't allocate
- don't use `delete` to free the same block of memory twice in succession
- use `delete []` if you used `new []`
- use `delete` (no brackets) if you used `new` to allocate memory for single entity
- it is safe to apply `delete` to the null pointer (no effect)

__
### Zero-Links
-
__
### Links
-