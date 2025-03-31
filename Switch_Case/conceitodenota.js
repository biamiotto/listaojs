let nota = 10;

switch (true) {
case (nota >= 9 && nota <= 10):
    {console.log(`A nota que você tirou foi A! 🥳`)};
break;
case (nota >= 7 && nota <= 8):
    {console.log(`A nota que você tirou foi B! 😁`)};
break;
case (nota >= 5 && nota <=6):
    {console.log(`A nota que você tirou foi C! 😐`)};
break;
case (nota >= 3 && nota <= 4):
    {console.log(`A nota que você tirou foi D! 😔`)};
break;
case (nota >= 0 && nota <= 2):
    {console.log(`A nota que você tirou foi E! 😰`)};
break;
default:
    {console.log(`Nota inválida 🤨`)};
}
