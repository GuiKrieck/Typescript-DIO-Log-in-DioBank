const conta = {
    email: "gui@dio.me",
    password: "123456",
    name: "Guilherme"
}

export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta)
    },3000)
})