# Type vs Interface in TypeScript

### Introduction
In TypeScript, the type and interface ase used to define data structures. Although they look similar, but they have some defferences.

### Explaination with code

An Interface is mainly used to define the structure of an objects. It specifics that which properties and methods must contains.

```ts
interface Employee{
    name:string,
    salary: number
}
```

A Type can also define object structures, but it supports additonal types like unions, primitives, tuple and also function types.

```ts
type Employee ={
    name:string,
    salary:number
}

type Status = "pending" | "success";
```


Interfaces can use extends but type commonly use intersection operator.

```ts
interface User{
    name: string
}
interface Employee extends User{
    salary: number;
    isActive: boolean
}


type User = {
    name: string;
};

type Employee = User & {
    salary: number
}
```
### Conclusion

Both type and interface is most important features of TypeScript. Choose any of them as your requirements.

