const findTheOldest = function(people) {
    function calculateAge(person) {
        if (person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        }
        const currYear = 2025;
        const age = currYear - person.yearOfBirth;

        return age;
    }

    // const sortedByAge = people.toSorted((person1, person2) => {
    //     const age1 = calculateAge(person1);
    //     const age2 = calculateAge(person2);
    //     return age1 - age2;
    // })

    // return sortedByAge[sortedByAge.length-1];
    return people.reduce((oldest, curr) => {
        const age1 = calculateAge(oldest);
        const age2 = calculateAge(curr);
        return age1 < age2 ? curr : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
