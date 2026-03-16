function addContact(
    name,
    phoneNumber,
    homeNumber = '없음',
    address = '없음',
    email = '없음',
) {
    let result = `name=${name}, mobile=${phoneNumber}, home=${homeNumber}, address=${address}, email=${email}`;
    console.log(result);
}

addContact('박병욱', '010-1234-5678');
addContact('전은서', '010-5678-1234', '031-123-4567', '평택시');

// name=박병욱, mobile=010-1234-5678, home=없음, address=없음, email=없음
// name=전은서, mobile=010-5678-1234, home=031-123-4567, address=평택시, email=없음
