//https://65b142e2d16d31d11bde76fe.mockapi.io/books

function fnPost(e){
   e.preventDefault()

   let book = {
    title: e.target.title.value,
    img: e.target.img.value,
    price: e.target.price.value,
   } 
   fetch('https://65b142e2d16d31d11bde76fe.mockapi.io/books',{
    method: 'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify(book)
})
   .then(res=> res.json())
   .then(data=> console.log(data))

}

fetch('https://65b142e2d16d31d11bde76fe.mockapi.io/books')
   .then(res=> res.json())
   .then(data=> fnRender(data))


    let elList = document.querySelector('.book__list')
   function fnRender(data){
    data.map((item)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">${item.price}</a>
            <button onclick="fnDelete(${item.id})" href="#" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
        </div>
        </div>
        `
        elList.appendChild(newLi)

    })
   }


   function fnDelete(id){
    console.log(id);
    fetch(`https://65b142e2d16d31d11bde76fe.mockapi.io/books/${id}`,{
        method: 'DELETE',
        headers:{'content-type':'application/json'},
               
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
   }