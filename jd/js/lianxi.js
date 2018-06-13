//var shop=["手机","电脑","单反"];
//
//for(var i=0;i<shop.length;i++){
//    var shops = document.querySelector(".shop ul");
//    var lis = document.createElement("li");
//    var text=document.createTextNode(shop[i]);
//    lis.appendChild(text);
//    shops.appendChild(lis);
//}


//var shop=[{name:"xiaoming",age:"3"},
//        {name:"xiaohong",age:"2"},
//        {name:"xiaoqiang",age:"4"}]
//var shopU = document.querySelector(".shop ul");
//for(var i=0;i<shop.length;i++){
//     shopU.innerHTML += "<li><p>"+shop[i].name+"</p><h3>"+shop[i].age+"</h3></li>";
//}

//new Vue({
//    el:"#shop",
//    data:{
//        arrs:["电脑","手机","公文包"]
//    }
//})



new Vue({
    el:"#shop",
    data:{
    arrs:[{name:"小明",age:"2"},
        {name:"小红",age:"3"},
        {name:"小强",age:"4"}]
}
})