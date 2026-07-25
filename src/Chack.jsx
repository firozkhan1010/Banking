import { useSelector } from "react-redux";

function Chack () {
    const name = useSelector((state) => state.userdata.data)
    console.log(name)
    return(
        name.map ((item,index) =>(
            <h1>{item.name}</h1>
        ))
    )
}

export default Chack