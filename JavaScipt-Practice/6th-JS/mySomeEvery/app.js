const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// exams.every (marks => marks > 70);

// console.log(exams.every (marks => marks > 70));

let goodScores = exams.every(marks => marks > 70);

console.log(goodScores);

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2010
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

let movieYear = movies.every(title => title.year > 2000);
let movieYearNew = movies.some(title => title.year > 2000);

console.log(movieYear);
console.log(movieYearNew);