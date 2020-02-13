const faktorial=(n)=> {
    var output=1;
    for(var i=n; i>=1; i--) {
    output*=i
}
    return output
}

console.log(faktorial(5)) //120
console.log(faktorial(4)) //24
console.log(faktorial(10)) //36
