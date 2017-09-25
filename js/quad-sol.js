// JavaScript File
alert ('If the creator have coded this web-site right it could solve Quadratic equation =)')
const a = Number(prompt('Enter a'));
const b = Number(prompt('Enter b'));
const c = Number(prompt('Enter c'));
function squareRoot(a, b, c){
    if (a === 0) {
        return 'x = 0'
    }
    
    else {
        const d = b * b - 4 * a * c;
        if (d === 0) {
            const x = - b / (2 * a) ;
            return 'x = ' + x;
        } 
        else if (d > 0){
            const x1 = (- b + Math.sqrt(d))/(2 * a);
            const x2 = (- b - Math.sqrt(d))/(2 * a);
            return 'x1 = '+ x1 + '<br>' + ' x2 = ' + x2;
        }
        else {
            return "No roots";
        }
}   }
const result = squareRoot(a, b, c);
document.write(result);