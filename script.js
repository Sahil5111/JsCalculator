class calc {
    constructor(t1, t2) {
        this.t1 = t1
        this.t2 = t2
        this.clear()
    }
    clear() {
        this.t2text = ""
        this.t1text = ""
        this.oper = undefined
    }
    del(){
        this.t2text=this.t2text.toString().slice(0, -1)
    }
    opersel(oper){
        if(this.t1text.includes('+')||this.t1text.includes('-')||this.t1text.includes('*')||this.t1text.includes('÷')){
            this.calculate()
        }
        
        
        this.t1text=this.t2text.toString()+oper.toString()
        this.oper=oper
        this.t2text=""
        
    }

    calculate() {
        let num1=parseFloat(this.t1text.slice(0,-1))
        let num2=parseFloat(this.t2text)
        let result=0
        switch(this.oper){
            case '+':
                result=num1+num2
                break
            case '-':
                result=num1-num2
                break
            case '*':
                result=num1*num2
                break
            case '÷':
                result=num1/num2
                break
            default:
                return
        }
        this.t1text=this.t1text+this.t2text
        this.result=result.toString()
        this.t2text=result.toString()
        this.oper=undefined

    }
    update(text) {
     if(text==='.'&&this.t2text.includes('.'))return
     this.t2text =this.t2.textContent.toString()+ text.toString()
    }
    updatedis() {
        this.t2.textContent = this.t2text
        this.t1.textContent= this.t1text
    }

}



const num = document.querySelectorAll(".num")
const oper = document.querySelectorAll("[data-operator]")
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

oper.forEach(button => {
    button.addEventListener('click', () => {
        calculator.opersel(button.textContent)
        calculator.updatedis()
    })
})

del.addEventListener('click',()=>{
    calculator.del()
    calculator.updatedis()
})

eq.addEventListener('click',()=>{
    calculator.calculate()
    calculator.updatedis()
})