function customRender(reactElement,cont) {

    /*  First version of code not good as have to repeat the attributes therfore we eill write in for loop
    const domElem = document.createElement(reactElement.type)
    domElem.innerHTML=reactElement.children
    domElem.setAttribute('href',reactElement.props.href)
    domElem.setAttribute('target',reactElement.props.target)

    cont.appendChild(domElem)
    */

    const domElem = document.createElement(reactElement.type)
    domElem.innerHTML=reactElement.children

    for(const prop in reactElement.props){
        if(prop==='children') continue

        domElem.setAttribute(prop,reactElement.props[prop])
    }
    cont.appendChild(domElem)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://leetcode.com/problemset/',
        target : '_blank'
    },
    children : 'Press Me To access Leetcode'
}

const container = document.getElementById('root');

customRender(reactElement,container)