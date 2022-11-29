import { question } from "readline-sync";

type operator = '+' | '-' | '/' | '*';

function main(): void
{
  const firstStr: string = question ('Enter your first number: \n');
  const operator: string = question ('Enter Operator: \n');
  const secondStr: string = question ('Enter your second number: \n');

  const validInpute: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  
  if (validInpute)
  {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as operator, secondNum);
    console.log(result);
  }
  else
  {
    console.log('\ninvalid input\n');
    main()
  }

}

function calculate(firstNum: number, operator: operator, secondNum: number)
{
  switch(operator)
  {
    case '+':
        return firstNum + secondNum;
    case '-':
        return firstNum - secondNum;  
    case '/':
            return firstNum / secondNum;  
    case '*':
                return firstNum * secondNum;    
    
  }
}

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;          

    }
}

function isNumber(str: string): boolean
{
  const maybeName = parseInt(str);
  const isNum: boolean = !isNaN(maybeName);
  return isNum;
}

main();