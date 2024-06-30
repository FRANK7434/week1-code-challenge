function salaryCalculator() {
    let basicSalary = Number(prompt("enter basicSalary"))
    let benefits = Number(prompt("enter benefits"))
    let payee = Math.floor((basicSalary + benefits) * 0.3)
    let nhifDeductions = Math.floor(basicSalary * 0.02)
    let nssfDeductions = Math.floor(basicSalary * 0.12)
    let grossSalary = Math.floor(basicSalary + benefits)
    let netSalary = Math.floor(grossSalary - payee - nhifDeductions - nssfDeductions)

    return alert(netSalary)
}
return SalaryCalculator;

