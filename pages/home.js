import React, { useState, useEffect } from 'react'
import gql from "graphql-tag"
import { POST_MUTATİON, POST_QUERY, DELETE_POST } from "../QueryAndMutations"
import { useMutation, useQuery, useLazyQuery } from "@apollo/react-hooks"
import Head from 'next/head'
import PostForm from "../components/createpostform/postform"
import Grid from '@material-ui/core/Grid';
import Spinner from "../components/spinner/spinner"
import Link from 'next/link'
import { addpostaction, adderroraction } from "../redux/post.reducer/post.reducer"
import Card from "../components/card/card"

import Error from "../components/error/error"





import { connect } from "react-redux"

function Home(props) {




    useEffect(() => {
        console.log("useeffect")
       



    }, [])



  

    const [startQuery, { error: generalerror }] = useLazyQuery(POST_QUERY, {
        onCompleted(result) {
            console.log("getirildi")
            props.addposts(result.getposts)
        },
        onError(error) {

            props.adderror("LÜTFEN SAYFAYI YENİLEYİNİZ")
            setTimeout(() => props.adderror(null), 4000)
        }

        , fetchPolicy: "cache-and-network"
    })










    
    return (
        
        <div style={{ marginTop: 75 }}>
            
            <Head>
        <title>MERT's App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index,follow"/>
        <meta name="description" content="this page is home page for social media app"></meta>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
</Head>
            
            {props.loading ? (
                <Spinner></Spinner>

            ) : (


                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
style={{marginTop:100}}
                    >

                        <Grid item xs={12}
                            style={{ width: "80%", marginBottom: 50 ,marginTop:100}}

                        >
                            <Grid container spacing={3}
                                direction="column"
                                justify="center"
                                alignItems="center"

                            >
                                <PostForm startquery={startQuery} />


                            </Grid>






                        </Grid>
                        {
                            props.error && (
                                <Error errorheader={"ERROR"} errorbody="POSTLAR GETİRELEMEDİ LÜTFEN SAYFAYI YENİLEYİN
    ( POSTS COULD NOT GET PLEASE REFLESH YOUR PAGE)"></Error>
                            )
                        }
                        {
                            generalerror && (
                                <Error errorheader={"ERROR"} errorbody="YAPTIĞINIZ İŞLEM BAŞARISIZ LÜTFEN TEKRAR DENEYİNİZ (PLEASE TRY AGAİN)"></Error>


                            )


                        }


                        <Grid container direction="row"

                            spacing={3}
                            justify="center"
                            alignItems="center"
                        >

                            {

                                props.posts.posts.map(post => 

(
                                        <Grid item lg={4} md={6} sm={12}
                                            spacing={3}
                                            key={post.id}
                                        >




<div style={{ margin: 50 }} >  <Card      key={post.id}
                                                    startquery={startQuery} id={post.id} body={post.body} username={post.username} createAt={post.createdAt}

                                                    commentsnumber={post.commentsnumber} likesnumber={post.likesnumber}
                                                    likes={post.likes}
                                                />    </div>


    
                                           


                                           










                                        </Grid>





                                    )


                                                            )                            }

                        </Grid>




                    </Grid>




                )}





        </div>
    )
}
const statetoprops = state => (

    {
        posts: state.posts
    }

)

const setprops = dispatch => (
    {

        addposts: (posts) => dispatch(addpostaction(posts)),
        adderror: (error) => dispatch(adderroraction(error))

    }
)


Home.getInitialProps = async (ctx) => {
    const { data, error, loading } = await ctx.apolloClient.query({ query:POST_QUERY  })
    if(!error){

        ctx.store.dispatch(addpostaction(data.getposts));
       
    }
    return { data, error, loading }
  }

export default connect(statetoprops, setprops)(Home)