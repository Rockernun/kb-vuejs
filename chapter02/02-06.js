function foodReport(name, age, ...favoriteFoods) {
    console.log(name + ', ' + age);
    console.log(favoriteFoods);
}

foodReport('박병욱', 29, '국밥', '돈까스', '스시');
foodReport('전은서', 29, '마라탕', '떡볶이');

// 박병욱, 29
// [ '국밥', '돈까스', '스시' ]
// 전은서, 29
// [ '마라탕', '떡볶이' ]
