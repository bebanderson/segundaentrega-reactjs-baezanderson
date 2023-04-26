import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function BreadcrumbInfo(){

const where = useLocation();

 return(
     <>
        <Breadcrumb>
            <Breadcrumb.Item>Productos{where.pathname}</Breadcrumb.Item>
        </Breadcrumb>
     </>
 )
}

export default BreadcrumbInfo;
