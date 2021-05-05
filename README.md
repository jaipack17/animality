# animality

Easy to use random animal api. Get facts and images of numerous animals!

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install random-api

```bash
$ npm i animality
```

## OR

```bash
$ npm install animality
```

# Require

```javascript
const animality = require("animality")
```

# Usage

## Animals: `cat`, `dog`, `bird`, `panda`, `redpanda`, `koala`, `fox`, `whale`, `kangaroo`, `bunny`

### Get information of a specific animal

```javascript
const animality = require("animality")

const animals = ["cat", "dog", "bird", "panda", "redpanda", "koala", "fox", "whale", "kangaroo", "bunny"] //all available animals

const animal = "cat" //replace cat with any animal you want from the array "animals"

animality.getAsync(animal).then(data => {
  console.log(data) //returns an object
})
```
## Output:
```json
{
  "image": "random cat image link",
  "fact": "random cat fact"
}
```

## Get information of a random Animal

```javascript
const animality = require("animality")

const animal = "random" 

animality.getAsync(animal).then(data => {
  console.log(data) //returns an object
})
```
## Output:

```json
{
  "name": "animal name",
  "image": "random animal image link",
  "fact": "random animal fact"
}
```
