// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(another ="*",msg="a dedicated programmer"){
    const inner =function(msg = "special"){
        return `You are ${another}${msg}${another}!`
    }
    return inner;
}