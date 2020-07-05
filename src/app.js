console.log('app.js is running!');


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option =  e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

}

const appRoot = document.getElementById('app');

const clearOptions=()=>{
    app.options=[];
    render();
}

const render= ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>
            }
            <p>{app.options.length}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <button onClick={clearOptions}>Clear Options</button>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
    
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();

