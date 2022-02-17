//Text to Number Conversion Funcion
function Convert(Data) {
    let DataField = document.getElementById('Data');
    let DataText = Data.value;
    let conversion = parseFloat(DataText);
    return conversion;
}
document.getElementById('calculator').addEventListener('click', function () {
    let income = Convert(Income);
    let rent = Convert(Rent);
    let food = Convert(Food);
    let shop = Convert(Shop);
    //TotalCost
    if (income>0 && food > 0 && rent > 0 && shop > 0) {
        let TotalCost = rent + food + shop;
        //console.log(TotalCost);
       
        if (TotalCost > income) {
            const Dataerror = document.getElementById('dataerror');
            Dataerror.style.display = 'block';
            
        }
        else{
        const TotalExpense = document.getElementById('TotalExpenses');
        TotalExpenses.innerText = TotalCost;
        let Balance = income - TotalCost;
        const BalanceField = document.getElementById('Balances');
            Balances.innerText = Balance;
        }
    }
    else {
        const Saveerror = document.getElementById('saveerror');
        Saveerror.style.display = 'block';
        
    }
})
document.getElementById('Save-button').addEventListener('click', function () {
    //calculating Saving amount and remainings
    let save = Convert(Save);
    let income = Convert(Income);
    let rent = Convert(Rent);
    let food = Convert(Food);
    let shop = Convert(Shop);
    const SavesAmount = document.getElementById('SavingsAmount');
    let Amount = ((income * save) / 100);
    const savings = parseFloat(Amount);
    if (savings < 0 || savings > (income - (rent + food + shop))) {
        const Saveerror = document.getElementById('saveerror');
        Saveerror.style.display = 'block';
        
    }
    else {
        SavingsAmount.innerText = savings;
        //TotalCost
        let TotalCost = rent + food + shop;
        const Remaining = document.getElementById('RemainingBalance');
        let RemainingBal = (income - (TotalCost + savings));
        RemainingBalance.innerText = RemainingBal;
    }
})