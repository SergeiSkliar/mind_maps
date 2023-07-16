# 
[[color buffer]]

two ways to reference value for color:
1. using an unsigned integer corresponding to the number of bits for each color (*channel*)
2. normalize the integer over a decimal range [0,1]

Converting between these two representations is straightforward. 
Given an unsigned integer value, divide it by the maximum unsigned integer value to get the normalized value.  
Conversely, given a normalized decimal value, multiply it by the maximum unsigned integer value to get an unsigned integer value.

2022/06/19::21:00
