function tabclick(tab){
    var index = Array.from(tab.parentNode.children).indexOf(tab);
    var main = document.getElementById("mainbox");
    var len = main.children.length;
    for(var i=0;i<len;i++)
    {
        if(i!=index)
        {
            main.children[i].classList.remove("tabactive");
           
        }
    }
    main.children[index].classList.add("tabactive");
    
}