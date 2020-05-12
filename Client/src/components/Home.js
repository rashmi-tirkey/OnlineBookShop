import React, { Component } from 'react'
import bookdata from './booklist.json'
import "./../ComponentCSS/Home.scss"
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="parrent-wrapper">
                    <div className="child-wrapper">
                        <div className="menu-class">
                            <font className="header"><i className="fad fa-books" aria-hidden="true"></i>BOOK STORE</font>
                            <input type="text" placeholder="Search for produts brands, and more" name="search" style={{width:"550px",height:"35px"}}/>
                            <input type="button" value="search"  className="search"/>
                            <input type="button"  value="Login" className="login"/>
                              <font  className="arr more" >More &#9663;</font>
                              <font><i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</font>
                        </div>
                    </div> 
                </div>
               
                <h3>This is Book List</h3>
                <div  style={{display:"flex", flexWrap:"wrap",textAlign:"center"}}>
                    {
                        bookdata.map((data,index) =>{
                            return(
                                <div style={{padding:"10px",margin:"10px",width:"29%"}}>
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
