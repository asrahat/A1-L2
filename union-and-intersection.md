# Union and Intersection Types in TypeScript

### Introduction

A Union Type allows a variable to hold one of saveral specified types, but an Intersection Type combines multiple types into one. Both are important for type definations and more flexible.

### Explainatoin with code

A Union Type uses the pipe (|) operator. It allows a value to be one of multiple types.

```ts
type Id = number | string;

let userID = Id;
userId = 4742;
userId = "Asr4742"
```

An Intersection Type uses the ampersand (&) operator. it combines multiple types into a single type containing all their requiered properties.

```ts
type User = {
    name:string
}

type Employee={
    salary : number
}

type Member = User & Employee;

const member:Member={
    name:"Rahat",
    salary:20000,
}
```

The main differenc is that Union means OR , Intersection means AND.

### Conclution

Union Types are useful when a value can be on of sevaral types, and Intersection Type are usefull when combining multiple object structures.
Use Union when you need to set multiple types on a value.
use Intersection when you want to combining multiple object structure.