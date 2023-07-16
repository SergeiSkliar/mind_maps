Inversion of Control (IoC) moves the secondary responsibilities from an object to other objects that are dedicated to the purpose.

DI - an object shloud not take responsibility for instantiating dependencies itself.

i.e. an actor constructor receives a pointer to the Game object. Than an actor can use this pointer to create another actor (or acces any other required Game function).