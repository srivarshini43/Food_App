import { sum } from "../Sum"

test("sum function should calculate the sum of two numbers",()=>{
    const result=sum(3,4);
    expect(result).toBe(7);//this line is known as assertion
});