

class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `${this.name}!`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getGreeting() {
    let description = super.getGreeting()

    if (this.hasMajor()) {
      
      return `${description} his major is ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age)
    this.home = home
  }
  hasHome() {
    return !!this.home
  }

  getGreeting() {
    let description = super.getGreeting()

    if (this.hasHome()) {
      return `${description} their home is ${this.home}`
    }
    return description
  }

}

// const me = new Student('Kevin Shaughnessy', 'bedofrd')
// console.log(me.getGreeting())

// const other = new Student()
// console.log(other.getGreeting())

const me = new Traveler('Kevin Shaughnessy', 343, 'bedoford')
console.log(me.getGreeting())


const other = new Traveler()
console.log(other.getGreeting())