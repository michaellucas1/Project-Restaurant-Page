export default class Renderer{
    constructor(elementObjArray){
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
        this.startAppend([...this.firstGenParent,...this.secondGenParent],this.secondGenChild);
        this.startAppend(this.firstGenParent,this.secondGenParent);
        this.startAppend(this.fragArray,[...this.firstGenChild,...this.firstGenParent]);
        this.startAppend(this.bodyArray,this.fragArray);
    }
    appendChild(...args){
        if(args.length===2 && args !==null){
            args[0][args[0].elementName].appendChild(args[1][args[1].elementName]);
        }
    }
    startAppend(parents,children){ 
        let i=0;
        while(parents.length>i){
            let j=0;
            while(children.length >j){
                if(parents[i].elementName==='docFrag' || parents[i].elementName==='body'){
                    this.appendChild(parents[i],children[j]);
                }
                else if(parents[i].elementName===children[j].childOf){
                    this.appendChild(parents[i],children[j]);
                }
                j++;
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