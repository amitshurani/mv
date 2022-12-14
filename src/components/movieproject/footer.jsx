import React, { Component } from 'react';
import  Pagination  from 'react-bootstrap/pagination';
   
class Footer extends Component{
    render(){
        const {pageVaid,newMovies,activeChange}=this.props;
        let pagNum = [];
        for (
        let num = 1;
        num <= Math.ceil(newMovies.length/pageVaid);
        num++
    ) {
        pagNum.push(
        <Pagination.Item key={num} onClick={() => activeChange(num)}>
          {num}
        </Pagination.Item>
      );
    }
    return <div><Pagination className='justify-content-center m-3'>{pagNum}</Pagination></div>
    }
}  

export default Footer;
