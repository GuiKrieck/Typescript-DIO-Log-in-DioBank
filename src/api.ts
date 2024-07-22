const conta = {
    email: "gui@dio.me",
    password: "123456",
    name: "Guilherme Piovezan Krieck",
    balance: 2500.00,
    id: "1"
}

export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta)
    },3000)
})