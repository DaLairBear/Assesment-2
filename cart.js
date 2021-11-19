///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc,curr) => ({price: acc.price + curr.price}))

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, cuponValue, tax) => {
    let cartTaxed = (cartTotal * (1 - tax))
    let cartCuponed = (cartTaxed - cuponValue)
    return cartCuponed
}
console.log(calcFinalPrice(100, 10, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    A customer ojbect should containg: Name(to identify the customer), Bill(what their meal total is),
    Discount(if the customer has any discounts and an object contatining those potentions/applied
    dicounts (i.e. military, senior), Coupon and an object denoting if they do or dont and their total
    (if the customer has any coupons)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    Name: 'Laramie', 
    Bill: 125, 
    Discount: {Military: .1, Senior: 0}, 
    Coupon: {Yes: 10, No: 0}
}