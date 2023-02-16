import { useEffect } from "react";

const MiApi = ({setCharacters}) => {

    const getData = async ()=>{
        const response = await fetch("https//api.sampleapis.com/futurama/characters");
        const data = await response.json();
        setCharacters(data)
    };
    useEffect(()=>{
        getData()
    },[])
}
export default MiApi
