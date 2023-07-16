# file modes

`in`  - open file for input. Only for `ifstream` and `fstream`
`out` - open file for output. Only for `ofstream` and `fstream`
`app` - seek to the end before every write
`ate` - seek to the end immediately after the open
`trunc` - truncate the file
`binary` - do IO in binary mode

`trunc` may be used only with `out`.
`app` may be specified only when `trunc` is not. Also, if `app` is specified, the `out` specified implicitly.
By default, using `out` truncates opened file even if the `trunc` is not specified. To preserve the contents of the file, either use `app` to append new data at the end of file, or use `in` to open file for input and output simultaneously.
`ate` and `binary` have no restrictions.

![[Pasted image 20220524225602.png]]


2022/03/11::15:30
