console.log("Działa");

function zad1(a, b, c){
    if ((a * a) + (b * b) == (c * c) || (a * a) + (c * c) == (b * b) || (b * b) + (c * c) == (a * a)) {
        console.log("Podane liczby tworza trojke pitagorejska");
    } else {
        console.log("Podane liczby NIE tworza trojki pitagorejskiej");
    }
}

function zad2(a,b,c){
    for (let index = a; index <= b; index++) {
        if (index%c == 0) {
            console.table(index);
        }  
    }
}

function zad3(a){
    var lst = [0,0,0];
    for(let i = 1; i <= a; i++){
        lst.values(i);
    }

    console.log(lst);
}