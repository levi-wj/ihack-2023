let puppies = [
  {
    id: 1,
    name: "Ollie"
  },
  {
    id: 1,
    name: "Courage"
  },
  {
    id: 1,
    name: "Dio"
  }
]

puppies.sort((a, b) => {
  return a.name > b.name;
})