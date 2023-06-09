import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

function HomePage(props) {
   return (
      <>
         <Head>
            <title>Welcome to Next.js!</title>
         </Head>
         <div>Welcome to Next.js!</div>
         <Link href="/posts/first" legacyBehavior><a>First Post</a></Link>
         <br/>
         <span onClick={() => Router.push('/posts/one')}>First Post ID</span>
         <br/>
         <span onClick={() => Router.push('/?counter=1', undefined, { shallow: true })}>Reload</span>
         {/* <div>Next stars: {props.stars}</div> */}
         <img src="/avatar.png" alt="Logo" />
            <style jsx>{`
            span {
            color: blue;
            cursor:pointer;
            },
            span:hover{
                color:red;
            }
          `}</style>
      </>	    
   )
}

// export async function getServerSideProps(context) {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return {
//        props: { stars: json.stargazers_count }
//     }
//  }

export default HomePage