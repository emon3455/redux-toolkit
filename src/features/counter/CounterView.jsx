import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByNumber, increment, reset } from "./counterSlice";


const CounterView = () => {

    const count = useSelector( state=> state.counter.count)

    const dispatch = useDispatch();

    return (
        <div className="max-w-xl mx-auto border shadow-md h-20 p-4 mt-5">
            <h1>Count: {count}</h1>
            <div className=" space-x-2">

                <button 

                onClick={()=>{ dispatch(increment()) } } 

                className="cursor-pointer px-2 py-1 bg-sky-500 rounded-sm text-white"
                >
                    Increment
                </button>

                <button onClick={()=> {dispatch(decrement())}} className="cursor-pointer px-2 py-1 bg-violet-500 rounded-sm text-white">Decrement</button>

                <button onClick={()=> {dispatch(reset())}} className="cursor-pointer px-2 py-1 bg-pink-500 rounded-sm text-white">Reset</button>

                <button 

                onClick={()=> {dispatch(increaseByNumber(10))}} 

                className="cursor-pointer px-2 py-1 bg-pink-500 rounded-sm text-white">
                    Increase By Number
                </button>


            </div>
        </div>
    );
};

export default CounterView;