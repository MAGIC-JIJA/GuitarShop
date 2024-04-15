function  render(){

    const productStore = localStorageUtil.getProducts();
    
    headerPage.render(productStore.length);
    productsPage.render();


}

let CATALOG  = [];

//https://api.jsonserve.com/Vf8O5m
//server/catalog.json

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });