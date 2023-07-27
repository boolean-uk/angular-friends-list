interface Person {
  name: string,
  isFav: boolean
}

export const createPerson = (name: string) => {
  return {
    name: name,
    isFav: false
  }
}

export default Person
