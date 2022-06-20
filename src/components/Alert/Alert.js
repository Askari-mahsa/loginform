import React from "react";
import { Alert } from 'reactstrap';



export const Successalert= () =>{

    return (
        <Alert style={{position:"absolute",top:"20px",width:"300px",right:"37%"}} fade={false} color="success">
        فیلد مورد نظر شما با موفقیت حذف شد.
      </Alert>
    )

}

export const Failalert= () =>{

    return (
        <Alert color="danger">
        عملیات مورد نظر شماانجام نشد.
      </Alert>
    )

}