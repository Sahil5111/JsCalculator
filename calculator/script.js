console.log("hello world")


class calc {
    constructor(t1, t2) {
        this.t1 = t1
        this.t2 = t2
        this.clear()
    }
    clear() {
        this.t2text = ""
        this.t1.text = ""
        this.oper = undefined
    }
    
    calculate() {


    }
    update(text) {
        this.t2text =this.t2.textContent.toString()+ text.toString()
    }
    updatedis() {
        this.t2.textContent = this.t2text
    }

}



const num = document.querySelectorAll(".num")
const oper = document.querySelectorAll("[data-operators]")
const ac = document.querySelector("[data-ac]")
const eq = document.querySelector("[data-equals]")
const del = document.querySelector("[data-del]")
const prev = document.querySelector("[data-prev]")
const curr = document.querySelector("[data-cur]")
const calculator = new calc(prev, curr)



num.forEach(button => {
    button.addEventListener('click', () => {
        calculator.update(button.textContent)
        calculator.updatedis()
    })
})

ac.addEventListener('click',()=>{
    calculator.clear()
    calculator.updatedis()
})