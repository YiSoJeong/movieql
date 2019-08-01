export const people = [
    {
        id: 0,
        name: "Sso",
        age: 20,
        gender: "female"
    },
    {
        id: 1,
        name: "Jung",
        age: 22,
        gender: "female"
    },
    {
        id: 2,
        name: "Moon",
        age: 25,
        gender: "male"
    },
    {
        id: 3,
        name: "Choi",
        age: 30,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0]
}