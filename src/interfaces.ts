interface Named {
    name: string;
    location?: string
}

interface Named2 extends Named {
    phone: number;
}


let x: Named2 = {
    name: "Alice",
    phone: 9191919191
};;
function greet(n : Named) {
    console.log("Hello, " + n.name);
}
greet(x); // OK
