const a = document.querySelector('#menu');
const b = document.querySelector('.link');


a.addEventListener('click',(e) => {
    e.preventDefault();

    a.classList.toggle('fa-times');
    b.classList.toggle('toggle')

});



const product = [
    {
        id: 121,
        Product_name: "Organic Tomato",
        rate: "$15.30",
        Discount: "$12.30",
        url: "/image/10.jpg"
    }
    ,
    {
        id: 122,
        Product_name: "Organic Banana",
        rate: "$10.30",
        Discount: "$8.12",
        url: "/image/9.jpg"
    }
    ,
    {
        id: 123,
        Product_name: "Organic Grapes",
        rate: "$80.50",
        Discount: "$40.65",
        url: "/image/8.jpg"
    },
    {
        id: 124,
        Product_name: "Organic Lemon",
        rate: "$102.80",
        Discount: "$40.10",
        url: "/image/5.jpg"
    },
    {
        id: 125,
        Product_name: "Organic Broccoli",
        rate: "$55.10",
        Discount: "$30.20",
        url: "/image/6.jpg"
    },
    {
        id: 126,
        Product_name: "Organic Potato",
        rate: "$12.00",
        Discount: "$6.00",
        url: "/image/7.jpg"
    },
    {
        id: 127,
        Product_name: "Organic",
        rate: "$10.30",
        Discount: "$8.12",
        url: ""
    }
];

// const array = [10,5,12,36,45,2,9,30];


const abc = product.find( function (test){
    return test.id = 124;
});


// console.log(abc);


// if(product[1].Product_name == "Aalu"){
//     console.log(`This is ${product[1].Product_name} product name`)
// }else{
//     console.log("error");
// }

// console.log(product[1].Product_name);


const product_container = document.querySelector(".box-container");

// console.log(product_container);

 product.forEach(element => {
    product_container.innerHTML +=  `
    <div class="box">
                <div>
                    <img src="${element.url}" alt="">
                </div>
                <h3>${element.Product_name}</h3>
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


 let array = [];

function ProductId(test){
    return product.find( function(element){
        return array.push(element.id = test);
    });
    
}

// console.log(array);



 const Student_details = [{
    Name : "Chandan Thakur",
    Age: "22 years",
    Educatin: [
        {
            Class : "10th",
            School_name : "N.V.N",
            Address: [
                {
                    Line_name: "rakdhi",
                    Zipcode: "302006",
                    State: "Jaipur"
                }
            ],
            Exam: "20 April",
            Subject : ["Hindi" , "English" , "Math" , "Science"]
        },
        {
            Class : "12th",
            School_name : "N.V.N",
            Address: [
                {
                    Line_name: "rakdhi",
                    Zipcode: "302006",
                    State: "Jaipur"
                }
            ],
            Exam: "20 April",
            Subject : ["Hindi" , "English" , "Math" , "Science"]
        }
    ]
 },
 {
    Name : "Ravi gupta",
    Age: "22 years",
    Educatin: [
        {
            Class : "10th",
            School_name : "",
            Address: [
                {
                    Line_name: "rakdhi",
                    Zipcode: "302006",
                    State: "Jaipur"
                }
            ],
            Exam: "20 April",
            Subject : ["Hindi" , "English" , "Math" , "Science"]
        },
        {
            Class : "12th",
            School_name : "N.V.N",
            Address: [
                {
                    Line_name: "rakdhi",
                    Zipcode: "302006",
                    State: "Jaipur"
                }
            ],
            Exam: "20 April",
            Subject : ["Hindi" , "English" , "Math" , "Science"]
        }
    ]
 }

]


