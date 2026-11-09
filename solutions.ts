function multiplyValue(value: number, multiplier: number = 2) {
    return value * multiplier
}



function processInput(value: string | number | boolean) {
    if (typeof value === 'string') {
        return value.trim().toLowerCase()
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    if (typeof value === "boolean") {
        return value ? 'Active' : 'Inactive'
    }
}



function formatCoordinate (coordinate : readonly [number, number, string]):string{
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`
    
}






function concatenateArrays<T>(...arrays:T[][]):T[] {
    return arrays.flat()
}
 


interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(course => course.isPublished === true && course.students >= minStudents)
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(item => item[key])
}






class Employee {
    constructor(
        protected name: string,
        private baseSalary: number) { }
    getDetails(): string {
        return `Employee: ${this.name} , Base Salary: ${this.baseSalary}`

    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number, public department: string) {
        super(name, baseSalary)

    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}



function validateAgeAsync (age:number):Promise<string>{
    return new Promise((resolve, reject)=>{
        if(age<18){
            reject(new Error('Access Denied: Must be 18 or older'))
            return
        }

        setTimeout(()=>{
            resolve("Access Granted")
        }, 1000)
    })
}

