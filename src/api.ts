const conta = {
    email: "gui@dio.me",
    password: "123456",
    name: "Guilherme",
    balance: 2000.00,
    id: "1"
}

export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta)
    },3000)
})