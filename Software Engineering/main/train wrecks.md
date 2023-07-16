# 
this code is a "traing wreck":
```
final String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();
```


better to split it:
```
Options opt = ctxt.getOptions();
File scratchDir = opts.getScratchDir();
final String outputDir = scratchDir.getAbsolutePath();
```

2022/04/02::22:58