function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add(a, b) {
        return a+b
    },
    subtract(a, b) {
        return a-b
    },
    multiply(a, b) {
        return a*b
    },
    divide(a, b) {  
        return a/b
    }

}

let actionApplyer = function(start,ray) {
    let a = start

    for (let i = 0; i < ray.length; i++){
        a = ray[i](a)
    }

return a
}