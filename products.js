

function buy(){
      var productsFirebase = [];
      for (let index = 0; index < products.length; index++) {
          if(products[index].cart){
              var product = {
                  name: products[index].name,
                  price: products[index].price,
                  quantity: products[index].quantity,
                  total: products[index].total,
              }
              productsFirebase.push(product);
          }
      }    
      var tot = total();
      sessionStorage.setItem("ptot", tot);
      window.location.href = "payment.html"
      clean();
      

  }

  var products = [
      {
          id:1,
          img:'img/product-1.jpg',
          name: 'Red Printed Tshirt',
          price: 50,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:2,
          img:'img/product-2.jpg',
          name: 'Black Sports Shoe',
          price: 100,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:3,
          img:'img/product-3.jpg',
          name: 'Grey Joggers',
          price: 70,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:4,
          img:'img/product-4.jpg',
          name: 'Blue Printed Tshirt',
          price: 50,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:5,
          img:'img/product-5.jpg',
          name: 'Black Sports Shoe',
          price: 100,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:6,
          img:'img/product-6.jpg',
          name: 'Black Printed Tshirt',
          price: 50,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:7,
          img:'img/product-7.jpg',
          name: 'Socks Set',
          price: 20,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:8,
          img:'img/product-8.jpg',
          name: 'Sports Watch',
          price: 130,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:9,
          img:'img/product-9.jpg',
          name: 'Sports Watch',
          price: 130,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:10,
          img:'img/product-10.jpg',
          name: 'Black Sports Shoe',
          price: 100,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:11,
          img:'img/product-11.jpg',
          name: 'Grey Sports Shoe',
          price: 100,
          cart:false,
          quantity:1,
          total:0
      },
      {
          id:12,
          img:'img/product-12.jpg',
          name: 'Black Joggers',
          price: 70,
          cart:false,
          quantity:1,
          total:0
      }
  ];

  
  function total() {
      let total =0;
      for (let index = 0; index < products.length; index++) {
          if(products[index].cart)
              total+= products[index].total;
      }
      return total;
  }

  var con=0;
  var con2=[];  //POSITION AT TABLE

  function clean() {
      for (let index = 0; index < products.length; index++) {
          products[index].cart = false;
          products[index].quantity =1;
          products[index].total = 0;
          con2 = [];
          updateCart();
      }
  }
  

  function add(id) {
      for (let index = 0; index < products.length; index++) {
          if (products[index].id != id || products[index].cart == true) {
              
          }
          else{
              products[index].cart=true;
              con2.push(products[index].id);
              document.getElementById('tableProducts').innerHTML+=`
              
              <tr>
              <td>
                  <div class="cart-info">
                      <img src="${products[index].img}">
                      <div>
                          <p>${products[index].name}</p>
                          <small>${products[index].price}</small>
                          <a onclick="remove(${products[index].id})">Remove</a>
                      </div>
                  </div>
              </td>
              <td>
                  <button class="btn btn-primary" onclick="reduceAmount(${products[index].id})">-</button>
                  <input style="width: 2rem;" id="${products[index].id}" value="${products[index].quantity}" disabled>
                  <button class="btn btn-primary" onclick="addAmount(${products[index].id})">+</button>
              </td>
              <td>${products[index].price}</td>
              </tr>
              `

              con++;
              products[index].total = products[index].price*products[index].quantity;
          }
      }
      document.getElementById('total').innerHTML=`
      <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td>
        <h4>Total : </h4>
      </td>
      <td>
        $ ${total()}.00
      </td>
      </tr>

      <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button onclick="buy()" class="btn btn-success">Buy</button>
      </td>
      </tr>
      `
  }

  function remove(id) {
      for (let index = 0; index < products.length; index++) {
          if (products[index].id == id) {
            products[index].cart = false;
            products[index].total = 0;
            products[index].quantity = 1;
            total();
            for (let index2 = 0; index2 < con2.length; index2++) {
                if (products[index].id == con2[index2]) {
                    con2.splice(index2,1);
                }
                else{

                }
            }
            updateCart();
          }else{
              updateCart();
          }
      }
  }

  function updateCart() {
      con=0;
      
      document.getElementById('tableProducts').innerHTML='';
      for (let index = 0; index < con2.length; index++) {
          var position = con2[index];
          for (let index3 = 0; index3 < products.length; index3++) {
                 if (position == products[index3].id) {
                    document.getElementById('tableProducts').innerHTML+=`
              
                    <tr>
                    <td>
                        <div class="cart-info">
                            <img src="${products[index3].img}">
                            <div>
                                <p>${products[index3].name}</p>
                                <small>${products[index3].price}</small>
                                <a onclick="remove(${products[index3].id})">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-primary" onclick="reduceAmount(${products[index3].id})">-</button>
                        <input style="width: 2rem;" id="${products[index3].id}" value="${products[index3].quantity}" disabled>
                        <button class="btn btn-primary" onclick="addAmount(${products[index3].id})">+</button>
                    </td>
                    <td>${products[index3].price}</td>
                    </tr>
                    `

                    products[index3].total = products[index3].price*products[index3].quantity;

                 } else {
                     
                 }           
          }
          con = con+1;
      }
      if(total() == 0) {
          document.getElementById('total').innerHTML = '';
      } else {
        document.getElementById('total').innerHTML=`
        
        <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td>
        <h4>Total : </h4>
      </td>
      <td>
        $ ${total()}.00
      </td>
      </tr>

      <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button onclick="buy()" class="btn btn-success">Buy</button>
      </td>
      </tr>
        `
      }
  }

  function reduceAmount(id) {
     for (let index = 0; index < products.length; index++) {
         if (products[index].id == id) {
             if (products[index].quantity>1) {
                 products[index].quantity = products[index].quantity-1;
                 updateCart();
                } else {
                 
             }
         }
     } 
  }

  function addAmount(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            if (products[index].quantity>0) {
                products[index].quantity = products[index].quantity+1;
                updateCart();
               } else {
                
            }
        }
    } 
  }

  //RENDER
  (()=>{
      for (let index = 0; index < products.length; index++) {
          document.getElementById('row1').innerHTML+=`
              <div class="col-4">
              <img src="${products[index].img}">
              <h4>${products[index].name}</h4>
              <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
              </div>
              <p>$ ${products[index].price}.00</p>
              <button class="btn btn-primary" onclick="add('${products[index].id}')">Add To Cart</button>
              </div>
          `;
      }
  })();