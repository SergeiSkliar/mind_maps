(float) single-
(double) double-
(long double) extended-precision values

1.234f // a float constant  
2.45E20F // a float constant  
2.345324E28 // a double constant  
2.2L // a long double constant

float represented in one word - 32 bits
double in two words (64 bits)

long double in 3 or 4 words (96 and 128)

float and double - 7 to 16 significant numbers

long double - depends

stored as value + scaling factor

34.1245 -> 0.341245 (value) and 100 (scaling factor)
34124.5 -> 0.341245 (value) and 100000 (scaling factor)
scaling factor serves to move the decimal point

in C++ scaling is by the factor of 2 instead of 10

scientific notation
3.45E6 == 3450000
E6 means 10 to the 6th power. 6 is an exponent, 3.45 is mantissa
7E5 == 7.0E+5
2.52E-4 negative exponent
5.98E24 mass of the Earth in kilograms
9.11e-31 kg means 0.000000000000000000000000000000911 kg the electron mass

The form d.dddE+n means move the decimal point n places to the right, and the form  
d.dddE-n means move the decimal point n places to the left. This moveable decimal point  is the origin of the term “floating-point.