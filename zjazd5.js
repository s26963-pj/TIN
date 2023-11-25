class Auto{

    rok = 0;
    przebieg = 0;
    cena_wyjsciowa = 0;
    cena_koncowa = 0;
    
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa){
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }

    zad11a() {
        this.cena_wyjsciowa += 1000;
    }
    zad11b(){
        this.cena_koncowa -= (new Date().getFullYear() - this.rok) * 1000;
    }
    zad11c(){
        if(this.przebieg > 100000){
            let x = this.cena_wyjsciowa / 100000;
            x *= 10000;
            this.cena_wyjsciowa -= x;
        }
    }
    zad11d(){
        this.zad11c();
        this.zad11b;
    }
}

const x = new Auto(1999, 3900000, 6500, 5500);
x.zad11a();
console.log(x.cena_wyjsciowa);