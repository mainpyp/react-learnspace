# Review of Essential JavaScript for React
* `Quokka` -> Start on Current File via Command Pallette
* `const`for not changing values, `var` for dynamic / variable values, `let`is outdated

## Destructuring Objects and Arrays
* `const {var1, var2} = object;` -> var1 and var2 must be keys in the object!!
* `const [firstVar, secondVar, ...restVars] = myArray` -> ... (the rest operator can only be placed last)

## Rest / Spread Operators
* Rest Operator: 
    * Add it to the last variable to add the last elements of an Array to a variable as a list (see above)
* Spread Operator:
    * This is used to alter object values
    * `const newGeneres = [...oldGerneArray, "new added gernre"]` -> "spreads out" the old Array and adds the string
    * `const newBook = {...book, moviePublicationDate: "2001-12-12"}` -> "spreads out" object functions and adds new key value pair

## String Literals
* Work very similar as f-strings 
* Syntax: ```const resultString = `Two plus two is ${2 +2}` ```

## Ternaries
* if,  else one liners
* `const returnVal = condition ? returnValIfTrue : returnValIfFalse`