/* const person = {
    age: 25,
    location: {
        city: 'Vilnius',
        temp: 4
    }
};

const { name = 'Anonymous', age } = person;

//const name = person.name;
//const age = person.age;

console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location;

if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
} */

/* const book = {
    title: 'Laimeti neuztenka',
    author: 'Sarunas Jasikevicius',
    publisher: {
        name: 'Alma Litera'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); */

const address = ['J. Balcikonio 164', 'Vilnius', 'Lithuania', '08314'];

const [ , , country = 'Telsiai' ] = address;

console.log(`You are in ${country}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffee, , medium ] = item;

console.log(`Medium ${coffee} costs ${medium}`);