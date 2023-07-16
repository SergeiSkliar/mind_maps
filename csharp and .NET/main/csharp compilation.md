# 


3 states and 2 stages:
- states
+ C#
+ CLI
+ Native (machine code)
- stages
+ from C# to CLI
+ from CLI to native machine code

Compilation process:

- [[csharp compilation step 1]] [[Common Intermediate Language]] is stored in Portable Executable (PE for 32-bit, PE+ for 64 bit) - .exe and .dll
-  [[csharp compilation step 2]] for .NET the OS invokes [[Common Language Runtime]]. CLR JIT compiles CIL to native code
-  [[csharp compilation step 3]]




![[Pasted image 20220813181327.png]]

2022/08/11::21:23
