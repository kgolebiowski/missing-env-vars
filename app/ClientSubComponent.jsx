"use client";

import { useEffect } from "react";

export default function ClientSubComponent({valueFromServerComponent}) {
    useEffect(() => {
        console.log("Value retrieved from parent in Client component: " + valueFromServerComponent)
    })

    return (
        <div>
            {valueFromServerComponent ?
                <p>The environment variable value in Client Subcomponent is &quot;{valueFromServerComponent}&quot;</p>
                :
                <p>The environment variable in Client Subcomponent is undefined</p>
            }
        </div>
    )
}