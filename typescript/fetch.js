function promise() {
    new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => data.json())
            .then((data) => resolve(imprimir(data)))
            .catch((e) => reject(new Error("falla al hacer la petición" + e)));
    });
}
function imprimir(data) {
    for (let i in data) {
        console.log(data[i].name);
    }
}
promise();
