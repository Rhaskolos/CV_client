import "../css/page.css";
import React from "react";
import DivGauche from "./DivGauche.js";
import Bar from "./Bar.js";
import DivDroite from "./DivDroite.js";

function Page()
{
    return(
        <div className ="page">
            <DivGauche/>
            <Bar/>
            <DivDroite/>
        </div>
            );
}

export default Page;
