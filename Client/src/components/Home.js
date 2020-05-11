import React, { Component } from 'react'
import bookdata from './booklist.json'
import "./../ComponentCSS/Home.css"
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="parrent-wrapper">
                    <table border="0" width="100%" backgroundColor="#287FO" height="60px"> 
                        <tr>
                            <td align="right" className="text-type"><img src="logo.png"/></td>
                            <td>
                                <input type="text" placeholder="Search for produts brands, and more" name="search" style={{width:"550px",height:"35px"}}/>
                                <input type="button" value="search"  style={{width:"75px",height:"35px"}}/>
                            </td>
                            <th> <button type="button" value="Login" style={{textAlign:"center",width:"150px",float:"left"}}>Login</button></th>
                            <th><font color="white" >More</font></th>
                            <th><font color="white">Cart</font></th>
                        </tr>
                </table>
                </div>
               
                <h3>This is Book List</h3>
                <div  style={{display:"flex", flexWrap:"wrap",textAlign:"center"}}>
                    {
                        bookdata.map((data,index) =>{
                            return(
                                <div style={{backgroundColor:"red" ,padding:"10px",margin:"10px",width:"29%"}}>
                                    <div>
                                        <img src={data.thumbnailUrl}></img>
                                    </div>
                                    <div>
                                        {data.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                 </div>
            </div>
        )
    }
}
