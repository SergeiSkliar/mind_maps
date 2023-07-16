
# strings
series of characters stored in consecutive bytes of memory

C-style string - [[built-in arrays]] of [[char]] ending with '\0' null character
cstring header for C-style string
[[string]] - header for STL C++ strings

string literal (string constant)

minimum array size: strlen(size) + 1

const int ArSize = 15;  
char name2[ArSize] = "C++owboy"; // C++owboy
name2[3] = '\0'; // C++

raw strings: R"()" OR   R"+*()+*"

cout << R"(write her)"; 
OR
cout << R"+*("(Who wouldn't?)", she whispered.)+*" << endl;

2021/08/26::22:18