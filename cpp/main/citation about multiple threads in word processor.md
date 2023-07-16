>Consider an application such as a word processor that can edit multiple documents at once. There are many ways to handle this, both at the UI level and internally.  
One way that’s increasingly common at the moment is to have multiple, independent,  
top-level windows, one for each document being edited. Although these windows  
appear to be completely independent, each with its own menus, they’re running  
within the same instance of the application. One way to handle this internally is to run each document-editing window in its own thread; each thread runs the same code but with different data relating to the document being edited and the corresponding window properties. Opening a new document therefore requires starting a new thread. The thread handling the request isn’t going to care about waiting for that other thread to finish, because it’s working on an unrelated document, so this makes it a prime candidate for running a detached thread.

