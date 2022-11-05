
import React, { useEffect, useState } from 'react'
import { getShelterList } from '../../api/getShelterList'
import css from './ShelterList.module.css';
function ShelterList(){
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        const fetchShelterList = async () => {
            const response = await getShelterList();
            setDisplayData(response);
        }

        fetchShelterList();
    }, []);

    // const DisplayData= await getShelterList().map(
    //     (info)=>{
    //         return(
    //             <tr>
    //                 <td>{info.id}</td>
    //                 <td>{info.address}</td>
    //                 <td>{info.location.latidue}</td>
    //             </tr>
    //         )
    //     }
    // )
 
    return(
        <div className={css.container}>
            <p className={css.title}>Shelter List</p>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData.map((info) => {
                        return(
                            <tr>
                                <td >{info.name}</td>
                                <td>{info.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default ShelterList;