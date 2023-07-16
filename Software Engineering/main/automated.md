use framework or create a class with a single method:
```java
public class ThreadJigglePoint{
	public static void jiggle(){
	}
}
```

which randomly selects among doing nothing, sleeping or yielding.

You can also make two implementations of `ThreadJigglePoint` - one does nothing and used in production; the second selects between nothing, sleeping etc.