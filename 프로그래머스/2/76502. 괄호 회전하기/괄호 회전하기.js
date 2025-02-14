function solution(s) {
    let answer = 0;
    const dequeue = s.split("");
    
    for(let i = 0; i < s.length; i++) {
        const stack = []
        
        // 올바른 괄호 문자열인지 판별
        for(let j = 0; j < s.length; j++) {
            if(j === 0 && ["]", ")", "}"].includes(dequeue[0])) {
                stack.push(dequeue[0]);
                break;
            }
            
            if(["[", "(", "{"].includes(dequeue[j])) stack.push(dequeue[j]);
            else {
                if(dequeue[j] === "]" && stack[stack.length - 1] === "[") stack.pop();
                else if(dequeue[j] === ")" && stack[stack.length - 1] === "(") stack.pop();
                else if(dequeue[j] === "}" && stack[stack.length - 1] === "{") stack.pop();
            }
        }
        
        if(!stack.length) answer += 1;
        
        dequeue.push(dequeue.shift()); // 앞에 문자를 뒤에 추가
    }
    
    
    return answer;
}