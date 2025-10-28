"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            return "No es posible dividir el numero entre 0";
        }
        return a / b;
    }
    calcular(operacion, a, b) {
        const op = operacion.toLowerCase();
        switch (op) {
            case 'sumar':
            case '+':
                return this.sumar(a, b);
            case 'restar':
            case '-':
                return this.restar(a, b);
            case 'multiplicar':
            case '*':
                return this.multiplicar(a, b);
            case 'dividir':
            case '/':
                return this.dividir(a, b);
            default:
                return `Error: Operación '${operacion}' no reconocida.`;
        }
    }
}
const calcSwitch = new Calculadora();
console.log(calcSwitch.calcular('+', 10, 5));
console.log(calcSwitch.calcular('dividir', 10, 0));
//# sourceMappingURL=Calculadora.js.map