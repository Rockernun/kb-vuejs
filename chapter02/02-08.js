function addContact1({ name, phone, email = '없음', age = 0 }) {
    console.log(name, phone, email, age);
}

addContact1({
    name: '박병욱',
    phone: '010-1234-5678',
});

function addContact2(contact) {
    if (!contact.email) {
        contact.email = '없음';
    }

    if (!contact.age) {
        contact.age = 0;
    }

    let { name, phone, email, age } = contact;
    console.log(name, phone, email, age);
}

addContact2({
    name: '박병욱',
    phone: '010-1234-5678',
});

function addContact3(name, phone, email = '없음', age = 0) {
    console.log(name, phone, email, age);
}

addContact3('박병욱', '010-1234-5678');

// 박병욱 010-1234-5678 없음 0
// 박병욱 010-1234-5678 없음 0
// 박병욱 010-1234-5678 없음 0
