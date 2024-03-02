import { invoice } from "../data/invoice"

export const getInvoice=()=>{
   
    //console.log(invoice);
    // let total=0;
    // invoice.items.forEach(item => {
    //     total=total+item.price*item.quantity;
    // });
     const  total= invoice.items
                         .map(item => item.price*item.quantity)
                         .reduce((accumulador,currentvalue)=> accumulador + currentvalue, 0);

    return {...invoice,total};

    //return invoice;
}