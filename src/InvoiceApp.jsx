
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { CompanyView } from "./components/companyView";
import { TotalView } from "./components/TotalView";
import { useState } from "react";



export const InvoiceApp = () => {

  //const invoice = getInvoice();

  const { total, id, name, client, company, items } = getInvoice();

  const [productValue,setProductValue]=useState('');
  const [priceValue,setPriceValue]=useState(0);
  const [quantityValue,setQuantityValue]=useState(0);
  
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

                <form className="col-10">
                    <input type="text"
                          name="product"
                          placeholder="Producto"
                          className="form-control m-3" onChange={event=>{
                            console.log(event.target.value);
                            setProductValue(event.target.value)
                          }}/>

                      <input type="number"
                              name="price"
                              placeholder="precio"
                              className="form-control m-3" onChange={event=>{
                                console.log(event.target.value);
                                setPriceValue(event.target.value);
                              }} />    
                      <input type="quantity"
                              name="cantidad"
                              placeholder="cantidad"
                              className="form-control m-3" onChange={event=>{
                                console.log(event.target.value);
                                setQuantityValue(event.target.value);
                              }} />         
                </form>
          </div>
        </div>
      </div>
    </>
  )

}