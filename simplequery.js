/*
    SIMPLE QUERY
    HOW TO USE :
    // Query selector
    query(".myClass").click(function(){console.log("Hello World");});
    // Get By ID
    id("MyID").addClass("newClass").attr("data-test","newValue");
    // 
    elt(document.getElementsByTagName("div")).removeClass("oldClass");

*/
var simple_query = function(){
    this.arrElt = [];
    this.elt=(function(e){
        this.arrElt.push(e);
        return this;
    });
    this.id =(function(i){
        var el = document.getElementById(i);
        if(el === null){ return null;}
        this.arrElt.push(el);
        return this;
    });
    this.query =(function(q){
        if(this.arrElt.length>0){
            this.arrElt = (this.arrElt[0]).querySelectorAll(q);
        }else{
            this.arrElt = document.querySelectorAll(q);
        }
        
        return this;
    });
    this.get =(function(n = 0){
        return this.arrElt[n];
    });
    this.width = (function(){
        return this.arrElt[0].offsetWidth;
    });
    this.height = (function(){
        return this.arrElt[0].offsetHeight;
    });
    this.val = (function(v=null){
        if(v===null){
            return this.arrElt[0].value;
        }else{
            for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].value = v;}
            return this;
        }
    })
    this.html = (function(h=null){
        if(h===null){
            return this.arrElt[0].innerHTML;
        }else{
            for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].innerHTML = h;}
            return this;
        }
    });
    this.removeNode = (function(){
      for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].remove();}
      return null;
    });
    this.addNode = (function(n,p = 'beforeend'){
      /*
      p :                 
      'beforebegin': Before the targetElement itself.
      'afterbegin': Just inside the targetElement, before its first child.
      'beforeend': Just inside the targetElement, after its last child.
      'afterend': After the targetElement itself.
      */
      var arrNode = [];
      for(var ne = 0; ne<this.arrElt.length; ne++){
        var node = document.createElement(n);
        this.arrElt[ne].insertAdjacentElement(p, node);
        arrNode.push(node);
      }
      this.arrElt = arrNode;
      return this;
    });
    this.addClass = (function(c){
        for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].classList.add(c);}
        return this;
    });
    this.toggleClass = (function(c){
        for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].classList.toggle(c);}
        return this;
    });
    this.removeClass = (function(c){
        for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].classList.remove(c);}
        return this;
    });
    this.attr = (function(a,v=null){
        if(v===null){
            if(this.arrElt.length == 0){return "";}
            return this.arrElt[0].getAttribute(a);
        }else{
            for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].setAttribute(a,v);}
            return this;    
        }
    });
    this.on = (function(ev,f){
        for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].addEventListener(ev, f);}
        return this;
    });
    this.click = (function(f){
        for(var ne = 0; ne<this.arrElt.length; ne++){this.arrElt[ne].addEventListener('click', f);}
        return this;
    });
    this.each = (function(f){
        for(var ne = 0; ne<this.arrElt.length; ne++){
            f(this.arrElt[ne]);
        }
        return this;
    });
    this.parent = (function(n = 1){
      var newElt =[];
      var parent;
      for(var ne = 0; ne<this.arrElt.length; ne++){
        parent = this.arrElt[ne];
        for(var p = 1; p<= n; p++){ parent = parent.parentNode; }
        newElt.push(parent);
      }
      this.arrElt = newElt;
      return this;
    });
};
var query = function(sQ){
    var sq = new simple_query();
    return  sq.query(sQ);
}
var id = function(sId){
    var sq = new simple_query();
    return sq.id(sId);
}
var elt= function(oE){
    var sq = new simple_query();
    return sq.elt(oE);
}
