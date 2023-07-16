non-bool to bool: true if nonzero, false if 0
bool to non-bool: 1 if true, 0 if false
floating point to integer: fractional part part is truncated. 5.75 -> 5
int to float: fractional part is zero

out-of-range: unsigned - remainder of the value modulo the number of values the target type can hold
signed - undefined

converting int to unsigned is the same as assign the int to an unsigned:
unsigned u = 10
int i = -42
cout << i+i; //-84
cout << u+i; //if 32-bit ints, prints 4294967264

list [[initialization]] doesn't support narrowing (e.g. floating types to integers)

in arithmetic operations two types of conversion:
some built-in types automatically converted whenever they occur
some types converted when they combined with other types

integral [[int]] promotions - bool, char, unsigned char, signed char, short -> [[int]]
unsigned short -> int if  short smaller than int
if equal -> to unsigned int

[[char]] wchar_t -> int, insigned int, long, unsigned long

long double -> double -> float -> integral promotions