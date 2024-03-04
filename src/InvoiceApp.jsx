
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { CompanyView } from "./components/companyView";
import { TotalView } from "./components/TotalView";
import { useState } from "react";



export const InvoiceApp = () => {

  //const invoice = getInvoice();

  const { total, id, name, client, company, items:itemsInicial } = getInvoice();

  const [productValue,setProductValue]=useState('');
  const [priceValue,setPriceValue]=useState('');
  const [quantityValue,setQuantityValue]=useState('');

  const [items,setItems]=useState(itemsInicial);

  const [counter,setCounter]=useState(4);
  
  return (
    <>

      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <h1>ejemplo factura</h1>
          </div>

          <div className="card-body">
                <InvoiceView  id={id}  name={name}/>
            <div className="row">
              <div className="col">
                 <ClientView title="datos del cliente" client={client} />
              </div>
              <div className="col">
                 <CompanyView title="datos de la empresa" company={company} />
              </div>
            </div>
                <ListItemsView title="Lista de factura" items={items}/>
                <TotalView  total={total}/>

                <form className="w-50" onSubmit={event =>{
                      event.preventDefault();
                     
                      if(productValue.trim().length <= 1) return; 
                      if(priceValue.trim().length <= 1) return; 
                      if(quantityValue.trim().length < 1) return; 

                      setItems([...items,{id:counter, product:productValue,price:+priceValue,quantity:parseInt(quantityValue)}])
                      
                      setPriceValue('');
                      setProductValue('');
                      setQuantityValue('');
                      setCounter(counter+1);

                      }}>
                    <input type="text"
                          name="product"
                          value={productValue}
                          placeholder="Producto"
                          className="form-control m-3" onChange={event=>{
                            console.log(event.target.value);
                            setProductValue(event.target.value)
                          }}/>

                      <input type="text"
                              name="price"
                              value={priceValue}
                              placeholder="precio"
                              className="form-control m-3" onChange={event=>{
                                console.log(event.target.value);
                                setPriceValue(event.target.value);
                              }} />    
                      <input type="text"
                              name="cantidad"
                              value={quantityValue}
                              placeholder="cantidad"
                              className="form-control m-3" onChange={event=>{
                                console.log(event.target.value);
                                setQuantityValue(event.target.value);
                              }} />
                        <button 
                                type="submit" 
                                className="btn btn-primary m-3">CNuevo Item</button>      

                </form>
          </div>
        </div>
      </div>
    </>
  )

}