function cek (koin) {
    var a = 0
    var b = 0
        if (koin % 25 < koin) {
            a += parseInt(koin / 25)
            b = koin % 25;
            koin = b;
            }
        if (koin % 10 < koin) {
            a += parseInt(koin / 10)
            b = koin % 10;
            koin = b;
            }
        if (koin % 5 < koin) {
            a += parseInt(koin / 5)
            b = koin % 5;
            koin = b;
            }
        if (koin % 1 < koin) {
            a += parseInt(koin / 5)
            b = koin % 5;
            koin = b;
        }
    a += parseInt(koin / 1)
    return a
}

console.log(cek(49)) //7
console.log(cek(31)) //3
console.log(cek(50)) //2

