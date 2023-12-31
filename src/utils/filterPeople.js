export const filterPeople = (people, searchParam) => {
  return people.filter((character) => {
    return character.name.toLowerCase().includes(searchParam.toLowerCase())
  })
}