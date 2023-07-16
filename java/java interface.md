all the methods inside the interface are abstract.
you can implement multiple interface (as opposed to inheritance).

```java
public interface Pet { ... }
```

to use:
```java
public class Cat extends Feline implements Pet { ... }
```

```java
public class Cat extends Feline implements Pet {
	public abstract void beFriendly(); // in fact using public and abstract keywords not necessary - interface methods public and abstract by default
	public abstract void play(); 
}
```

