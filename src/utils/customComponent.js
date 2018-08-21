const classArray = [];

let classname = '';

const classNameCreate = () => {
    return '.ma-' + Math.random().toFixed(6).slice(2);
}

export const createClass = (str) => {
    classname = classNameCreate();
    classArray.push(classname + '{' + str.replace(/[\r|\n|\s]/g,'') + '}')
    const style = document.createElement('style');
    style.innerText = classArray.join('');
    document.head.append(style);
    return classname.slice(1);
}

export const componentStyleInit = () => {
    // const style = document.createElement('style');
    // style.innerText = classArray.join('');
    // document.head.append(style);
}