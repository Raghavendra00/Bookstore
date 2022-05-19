import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Search = () => {
    let navigate = useNavigate();
    const [name,setName] = useState('')

    const frmSubmit = async (e) => {
        e.preventDefault()
         navigate(`/output/${name}`);
    }

    return (
        <div>
            <form onSubmit={frmSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search
