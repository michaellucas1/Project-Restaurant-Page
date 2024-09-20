export default class Renderer{
    constructor(){
    }
    initialize(elementObjArray){
        this.frag = document.createDocumentFragment();
        this.fragObject={docFrag:this.frag,elementName:"docFrag"};
        this.fragArray =[this.fragObject];
        this.body = document.querySelector("body");
        this.bodyObject={body:this.body,elementName:"body"};
        this.bodyArray =[this.bodyObject];
        this.firstGenChild =[];
        this.firstGenParent=[];
        this.secondGenChild=[];
        this.secondGenParent=[];
        this.startCreate(elementObjArray);
    }
    detachAll(){
        console.log(this.fragArray);
        this.startDetach([...this.firstGenParent,...this.secondGenParent],this.secondGenChild);
        this.startDetach([...this.firstGenParent,...this.secondGenParent],this.secondGenParent);
        this.startDetach(this.bodyArray,[...this.firstGenChild,...this.firstGenParent]);
    }
    appendChild(...args){
        if(args.length===2 && args !==null){
            args[0][args[0].elementName].appendChild(args[1][args[1].elementName]);
        }
    }
    appendAll(){
        this.startAppend([...this.firstGenParent,...this.secondGenParent],this.secondGenChild);
        this.startAppend([...this.firstGenParent,...this.secondGenParent],this.secondGenParent);
        this.startAppend(this.fragArray,[...this.firstGenChild,...this.firstGenParent]);
        this.startAppend(this.bodyArray,this.fragArray)

    }
    startAppend(parents,children){ 
        let i=0;
        while(children.length>i){
            if(parents[0].elementName==='docFrag' || parents[0].elementName==='body'){
                this.appendChild(parents[0],children[i]);
            }
            else{
                const found = parents.find((element, index)=>{
                    element.elementName===children[i].childOf;
                    if(element.elementName===children[i].childOf){
                        return element;
                    }
                });
                if(found){
                    this.appendChild(found,children[i]);
                }
            }
            i++;
        }
    }
    detachChild(...args){
        if(args.length===2 && args !==null){
            args[0][args[0].elementName].removeChild(args[1][args[1].elementName]);
        }
    }
    startDetach(parents,children){ 
        let i=0;
        while(children.length>i){
            if(parents[0].elementName==='docFrag' || parents[0].elementName==='body'){
                this.detachChild(parents[0],children[i]);
            }
            else{
                const found = parents.find((element, index)=>{
                    element.elementName===children[i].childOf;
                    if(element.elementName===children[i].childOf){
                        return element;
                    }
                });
                if(found){
                    this.detachChild(found,children[i]);
                }
            }
            i++;
        }
    }
    startCreate(elementObjArray){
        let i=0;
        while(elementObjArray.length>i){
            this.createElement(elementObjArray[i]);
            i++;
        }
    }
    createElement(elementObject){
        const {elementName} = elementObject;
        const {tagName,className, content, ...rest}=elementObject;
        rest[elementName]=document.createElement(tagName);
        if(className ?? "" !==""){
            rest[elementName].className +=`${className}`;
        }
        if(content ?? "" !==""){
            rest[elementName].textContent =`${content}`;
        }
        this.storeElement(rest);
    }
    storeElement(elementObject){
        const {childOf,isParent,}=elementObject;
        if(childOf==='body' && isParent){  
            this.firstGenParent.push(elementObject);
        }
        else if(childOf==='body' && !isParent){
            this.firstGenChild.push(elementObject)
        }
        else if(childOf!=='body' && isParent){
            this.secondGenParent.push(elementObject);
        }
        else if(childOf!=='body' && !isParent){
            this.secondGenChild.push(elementObject);
        }
    }

}