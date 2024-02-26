const a = document.querySelector('#menu');
const b = document.querySelector('.link');


a.addEventListener('click', (e) => {
    e.preventDefault();

    a.classList.toggle('fa-times');
    b.classList.toggle('toggle')

});

let url = "https://res.cloudinary.com/dsbfph2lo/image/upload/v1707079268/"


const product = [
    {
        id: 121,
        Product_name: "Organic Tomato",
        rate: "$15.30",
        Discount: "$12.30",
        url: `${url}aqqeaozkaxvjfe6bgisz.jpg`
    }
    ,
    {
        id: 122,
        Product_name: "Organic Banana",
        rate: "$10.30",
        Discount: "$8.12",
        url: `${url}nsnoqhrwiqboorgilivp.jpg`
    }
    ,
    {
        id: 123,
        Product_name: "Organic Grapes",
        rate: "$80.50",
        Discount: "$40.65",
        url: `${url}eenypaxlm02l118yamim.jpg`
    },
    {
        id: 124,
        Product_name: "Organic Lemon",
        rate: "$102.80",
        Discount: "$40.10",
        url: `${url}jaxdfrdya838cifisatg.jpg`
    },
    {
        id: 125,
        Product_name: "Organic Broccoli",
        rate: "$55.10",
        Discount: "$30.20",
        url: "https://res.cloudinary.com/dsbfph2lo/image/upload/v1707079268/dyn6r1aj35axgm5pkgu4.jpg"
    },
    {
        id: 126,
        Product_name: "Organic Potato",
        rate: "$12.00",
        Discount: "$6.00",
        url: "https://res.cloudinary.com/dsbfph2lo/image/upload/v1707079268/tobc7ai5nfuzathr5tb5.jpg"
    },
    {
        id: 127,
        Product_name: "Organic",
        rate: "$10.30",
        Discount: "$8.12",
        url: ""
    },
    {
        id: 128,
        Product_name: "Organic",
        rate: "$12.00",
        Discount: "$6.00",
        url: "https://res.cloudinary.com/dsbfph2lo/image/upload/v1707079268/tobc7ai5nfuzathr5tb5.jpg"
    }
];

let product_container = document.querySelector(".box-container");

// console.log(product_container);

product.forEach(element => {
    product_container.innerHTML += `
    <div class="box">
                <div>
                    <img src="${element.url}" alt="">
                </div>
                <h3 id="product_name">${element.Product_name}</h3>
                <ul class="star">
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star-half"></i></li>
                </ul>
                <div class="price">
                    <span>${element.rate}</span> <span>${element.Discount}</span>
                </div>
                <ul class="icon">
                    <li><i class="fa-solid fa-cart-shopping" onclick="ProductId(${element.id})"></i></li>
                    <li><i class="fa-solid fa-eye"></i></li>
                    <li><i class="fa-solid fa-heart"></i></li>
                    <li><i class="fa-solid fa-share"></i></li>
                </ul>
            </div>
    `

    // console.log(element);
});


// function ProductId(val){
//     produect_id.push(val);
// }



// console.log(produect_id);
// console.log(product.length);

// let product_id = [];

// let getlocal = localStorage.getItem("product");
// product_id = JSON.parse(getlocal);

window.addEventListener("load", (event) => {
    bagCount();
  });


const produect_id = [];


function ProductId(id){


    if(!produect_id.includes(id)){
        produect_id.push(id);
    }else{
        console.log("Aleardy add");
    }

    localStorage.setItem("product", produect_id);

    bagCount();

}


const cart_container = document.querySelector("#fetch_data");
// console.log(cart_container.innerHTML = );


function bagCount(){

    let data = [];

    const localStorage_get123 = localStorage.getItem("product");
    let split = localStorage_get123.split(",");

            data.push(...split);

    console.log(data);

    product.forEach((element) =>{
        for(let i = 0; i < data.length; i++){
            if(data[i] == element.id){


            cart_container.innerHTML += `
            <tr>
            <td class="flex">
                <img src="${element.url}"
                    alt="">

                    <div class="product_name">
                    <h2>${element.Product_name}</h2>

                    <ul class="fa-star5">
                        <li>
                        <li><i class="fa-solid fa-star"></i></li>
                        </li>
                        <li>
                        <li><i class="fa-solid fa-star"></i></li>
                        </li>
                        <li>
                        <li><i class="fa-solid fa-star"></i></li>
                        </li>
                        <li>
                        <li><i class="fa-solid fa-star"></i></li>
                        </li>
                        <li>
                        <li><i class="fa-solid fa-star-half"></i></li>
                        </li>
                    </ul>
                </div>
            </td>
            <td>
               <span>${element.rate}</span>
            </td>
            <td>
                <div>
                    <span class="Dec">-</span>
                    <span class="total_item">1</span>
                    <span class="Ine">+</span>
                </div>
            </td>
            <td>
                <h3>$20.25</h3>
            </td>
            <td>
                <i class="fa-solid fa-xmark"></i>
            </td>
        </tr>
            `
            }
        }
    });    


    const bagItem = document.getElementById("bag");
    bagItem.innerHTML = split.length;

    
}



// let get = localStorage.getItem("product");
// console.log(get);

// let h = get.split(",");
// console.log(h);








// let g = localStorage.getItem("product");
// console.log(g);
// console.log(product_id);
// console.log(product_id.length);


// product.find((element) => {
//     for(let i = 0;i < product_id.length; i++){
//         // console.log(product_id[i]);
//             // console.log(product_id[i] === element.id)

//             if(element.id === product_id[i]){
//                 return product_id[i];
//             }
    
//     }
// });

// let itemObj = product_id.map((element) => {
//     // console.log(element);

//     for(let i =0; i < product.length;i++){
//         if(element === product[i].id){
//             return product[i];
//         }

//     }

// });

// console.log("hii " + itemObj);



// let bagItemObjects = product_id.map(itemId => {

//     console.log(itemId)
//     for (let i = 0; i < product.length; i++) {
//         console.log(itemId);
//       if (itemId == product[i].id) {
//         return product[i];
//       }
//     }
//   });

// console.log(bagItemObjects);



const cart = document.querySelector("#dispaly_cart");
const cart_details = document.querySelector("#cart_container");

cart.addEventListener( "click" , () => {

    cart_details.style.visibility = "visible";

    // cart.style.display = "none";

    // cart.classList.toggle('fa-xmark');

});















// function ProductId(val){


    // const array = product.find((element)=>{
    //     if (element.id === val) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // });

    // localStorage.setItem("project",JSON.stringify(array.id));
    // console.log(array);    
// }

// let g = JSON.parse(localStorage.getItem("array"));
// console.log(g);
// console.log(array);



// const array = [10,5,12,36,45,2,9,30];


// const abc = product.find( function (test){
//     return test.id = 124;
// });


// console.log(abc);


// if(product[1].Product_name == "Aalu"){
//     console.log(`This is ${product[1].Product_name} product name`)
// }else{
//     console.log("error");
// }

// console.log(product[1].Product_name);





// let array = [];

// function ProductId(test) {
//     return product.find(function (element) {
//         return array.push(element.id = test);
//     });

// }



// console.log(array);


// const Student_details = [{
//     Name: "Chandan Thakur",
//     Age: "22 years",
//     Educatin: [
//         {
//             Class: "10th",
//             School_name: "N.V.N",
//             Address: [
//                 {
//                     Line_name: "rakdhi",
//                     Zipcode: "302006",
//                     State: "Jaipur"
//                 }
//             ],
//             Exam: "20 April",
//             Subject: ["Hindi", "English", "Math", "Science"]
//         },
//         {
//             Class: "12th",
//             School_name: "N.V.N",
//             Address: [
//                 {
//                     Line_name: "rakdhi",
//                     Zipcode: "302006",
//                     State: "Jaipur"
//                 }
//             ],
//             Exam: "20 April",
//             Subject: ["Hindi", "English", "Math", "Science"]
//         }
//     ]
// },
// {
//     Name: "Ravi gupta",
//     Age: "22 years",
//     Educatin: [
//         {
//             Class: "10th",
//             School_name: "",
//             Address: [
//                 {
//                     Line_name: "rakdhi",
//                     Zipcode: "302006",
//                     State: "Jaipur"
//                 }
//             ],
//             Exam: "20 April",
//             Subject: ["Hindi", "English", "Math", "Science"]
//         },
//         {
//             Class: "12th",
//             School_name: "N.V.N",
//             Address: [
//                 {
//                     Line_name: "rakdhi",
//                     Zipcode: "302006",
//                     State: "Jaipur"
//                 }
//             ],
//             Exam: "20 April",
//             Subject: ["Hindi", "English", "Math", "Science"]
//         }
//     ]
// }

// ]


// const _product = document.querySelectorAll(".box");
    
//     _product.forEach((e) => {
//         let data = e.querySelector("h3").textContent.toUpperCase();
//             console.log(data);

//             console.log(data == "ORGANIC BANANA");

//         if(data == "ORGANIC BANANA"){
//             e.style.displsy = "block"
//         }else{
//             e.style.display = "none"
//         }

//     });




function search(){

    const input = document.querySelector("#search").value.toUpperCase();
    console.log(input)

    const _product = document.querySelectorAll(".box");
    
    _product.forEach((e) => {
        
        let data = e.querySelector("h3").textContent.toUpperCase();

    
        if(data === input){
            e.style.display = "block";
            
        }else{
            e.style.display = "none"
        }
    
    });


}



