##dynamic evaluation
#### to evaluate an expression and print the result
```
node --print "console.log('iva')"
node -p "console.log('')"
```
### just to evaluate an expression
```
node --eval "1+1"
node -e "1+1"

````
#### using -e to print something to the terminal
```
node -e "console.log(1+1)"
```
[!NOTE] core modules can be accesed within code evaluation context

```

 node -p "fs.readdirSync('.').filter(file => /.js$/.test(file))"
 ```

