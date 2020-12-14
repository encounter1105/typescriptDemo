function judgeWho(animal) {
    if (animal.anjiao) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function judgeWhoTwo(animal) {
    if ("skill" in animal) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function add(first, second) {
    if (typeof first === "string" || typeof second === "string") {
        return "" + first + second;
    }
    return first + second;
}
var NumberObj = (function () {
    function NumberObj() {
    }
    return NumberObj;
}());
function addObj(first, second) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
