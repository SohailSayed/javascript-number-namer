# Javascript Number Namer

Program which outputs an english language name for any number inputted.


## Running the tests

The program works flawlessly on almost all inputs below 10^12, with the excpetion of some numbers with many "0"s. Numbers beyond get increasingly corrupted answers by increase in size, as a result of how Javascript saves/processes large numbers.

### Break down into end to end tests

Given an input, the program produces an english language output like so:

```
*Input:* 8123 ---> *Output:* "eight thousand, one huhndred twenty three"
```

## Built With

* [Javascript ES6]
