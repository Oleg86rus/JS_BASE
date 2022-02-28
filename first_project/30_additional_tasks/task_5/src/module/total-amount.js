export function findingTotalAmount () {
    let totalAmount = [];
    const totalMoney = document.querySelectorAll('b');
    totalMoney.forEach((el) => {
        let money = el.innerHTML;
        money = money.slice(0, money.indexOf('$'));
        totalAmount.push(Number(money));
    })
    if (totalAmount.length === 0) {
        totalAmount = 0;
    } else {
        totalAmount = totalAmount.reduce((acc, el) => acc + el);
        const totalAmountHTML = document.querySelector('#total-amount');
        totalAmountHTML.innerHTML = totalAmount + ' $';
    }
    return totalAmount;
}
