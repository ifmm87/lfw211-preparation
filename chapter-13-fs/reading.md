Reading and Writing (1)
The fs module has lower level and higher level APIs. The lower level API's closely mirror POSIX system calls. For instance,
fs.open opens and possibly creates a file and provides a file descriptor handle,
taking same options as the POSIX open command (see open(3) - Linux man page by linux.die.net 
and fs.open(path[, flags[, mode]], callback) section of the Node.js Documentation for more details). 
While we won't be covering the lower level APIs as these are rarely used in application code, 
the higher level API's are built on top of them.

The higher level methods for reading and writing are provided in four abstraction types:

Synchronous
Callback based
Promise based
Stream based
