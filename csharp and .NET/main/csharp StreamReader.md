# 
```cs
string fileName = "C:\file.txt";
using (StreamReader sr = new StreamReader(fileName))
{
	while (sr.EndOfStream != true)
	{
		Console.WriteLine(sr.ReadLine);
	}
	sr.Close();
}
```

2022/08/12::14:46
