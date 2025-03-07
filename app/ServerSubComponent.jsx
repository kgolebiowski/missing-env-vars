import { connection } from 'next/server'

// From https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#runtime-environment-variables
// Other method in https://github.com/vercel/next.js/discussions/44628#discussioncomment-7040424
export default async function ServerSubComponent() {
    await connection();

    const value = process.env.NEXT_PUBLIC_TEST
    console.log("Value retrieved in async Server component: " + value)

    return (
        <div>
            {value ?
                <p>The environment variable value in Server Subcomponent is &quot;{value}&quot;</p>
                :
                <p>The environment variable in Server Subcomponent is undefined</p>
            }
        </div>
    )
}