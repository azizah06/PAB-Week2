const Cat = (props) => {
    //deklarasi state
    const [isHungry, setIsHungry] = React.useState(true);

    return(
        <div>
            <p>I am {props.name}, and I am {isHungry ? "hungry" : "full"}!</p>
            <button onClick={() =>{
                //ubah nilai state
                setIsHungry (false);
            }}
            disabled={!isHungry}>
                {isHungry ? "Pour me some milk, please!" : "Thankyou!"}
                </button>    
        </div>
    );
}

const Cafe = ()=>{
    return(
        <div>
            <Cat name = "Munkustrap"/>
            <Cat name = "Spot"/>
        </div>
    );
}
const myElement = <Cafe/>;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);