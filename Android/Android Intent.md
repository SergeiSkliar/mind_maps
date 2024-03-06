#android 

Intent can be *explicit* and *implicit*.

*explicit* intent used when directly naming the class:
```java
Intent intent = new intent(this, CalledActivity.class);
startActivity(intent);
```
```kotlin
val intent = Intent(this, CalledActivity::class.java);
startActivity(intent);
```

to use an implicit intent you need to specify an [[Android Action|action]]:
```java
Intent intent = new intent(action);
```

[[Android Intent Resolution]]
