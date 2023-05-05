//PascalCasing - capitalize every the first letter of every word
function Message(){
    //JSX: JavaScript XML

    //putting expression between {}, expression is a piece of code that produces a value
    const name = 'Diane';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World!</h1>;
}

export default Message;