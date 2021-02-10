import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL : "http://localhost:5000/"
});
const View=()=>{
    return(
        <h1> Hello</h1>
    );
}

{list &&
           
    list.map((l) => {
      return(
      <div key={ list.id }>
<View />
           <h3>{ l.name }</h3>
           <h3>{ l.email }</h3>
           <h3>{ l.phone }</h3>
           <h3>{ l.password }</h3>
           
      </div>
      )
    })
    
}
export default View;