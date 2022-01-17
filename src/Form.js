import React from 'react'
import styles from './styles/styles.css'
import { useState } from 'react'
import Head from './Components/Head'

function Form() {
    const [page, setPage] = useState(1)

    const data = [
        {
            head: 'Welcome! First things first...',
            subHead: 'You can alwasys change them later.'
        },
        {
            head: 'Let\'s set up a home for all your work',
            subHead: 'You can alwasys create another workspace later.'
        },
        {
            head: 'How are you planning to use Eden?',
            subHead: 'We\'ll stramline your setup experience accordingly'
        },
        {
            head: 'Congratulations, Eren!',
            subHead: 'You have completed onboarding, you can start using Eden!'
        }
    ]
    function goToNext() {
        setPage((page) => page + 1);
    }

    return (
        <>
        <div className="container wrapper">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-xl-6">
                <div className="">
                    <div className="logo">
                        <h4>Eden</h4>
                    </div>
                    {/* Progress bar */}
                    <Progress page={page}/>
                    {/* Progress bar ends */}
                </div>
                <div className="row mx-auto d-flex justify-content-center">
                    <div className="col-12 col-lg-8 m-3" style={{justifyContent:'center', display:'grid'}}>
                        {page === 1 && <Head val={data[0].head} subVal={data[0].subHead} />}
                        {page === 2 && <Head val={data[1].head} subVal={data[1].subHead} />}
                        {page === 3 && <Head val={data[2].head} subVal={data[2].subHead} />}
                        {page === 4 && <Head val={data[3].head} subVal={data[3].subHead} />}

                        {/* Form start */}
                        {page === 1 && <Page1 />}
                        {page === 2 && <Page2 />}
                        {page === 3 && <Page3 />}
                        {/* Form end */}

                        {/* Button start */}
                        {page !== 4 && <button onClick={goToNext}>Create Workspace</button>}
                        {page === 4 && <button>Launch Eden</button>}
                        {/* Button end */}
                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    )
}

function Progress({page}) {
    return(
        <div className="row d-flex progressBar justify-content-around">
                        <div className="col-3 col-md-2 justify-content-center d-flex">
                            <div className="steps active">
                                1
                            </div>
                            <div>
                                <hr className="muter bar"/>
                            </div>
                        </div>
                        <div className="col-3 col-md-2 justify-content-center d-flex">
                            <div className={"steps " + ( page === 2 ? 'active' : '') + ( page ===3 || page === 4 ? 'active' : '')}>
                                2
                            </div>
                            <div>
                                <hr className={"muter " + ( page === 2 ? 'bar' : '') + ( page ===3 || page === 4 ? 'bar' : '')}/>
                            </div>
                        </div>
                        <div className="col-3 col-md-2 justify-content-center d-flex">
                            <div className={"steps " + ( page === 3 ? 'active' : '') + ( page === 1 && page === 2 ? 'active' : '') + (( page === 4 ? 'active' : ''))}>
                                3
                            </div>
                            <div>
                                <hr className={"muter " + ( page === 3 ? 'bar' : '') + ( page === 1 && page === 2 ? 'bar' : '') + (( page === 4 ? 'bar' : ''))}/>
                            </div>
                        </div>
                        <div className="col-3 col-md-2 justify-content-center d-flex">
                            <div className={"steps " + ( page === 4 ? 'active' : '') + ( page === 1 && page === 2 && page ===3 ? 'active' : '')}>
                                4
                            </div>
                        </div>
                    </div>
    )
}

function Page1() {
    return(
    <form style={{display:'grid'}}>
        <label className="d-block text-start">Full Name</label>
        <input className="d-block text-start" type="text" placeholder="Steve Jobs"/>
        <label className="d-block text-start">Display Name</label>
        <input className="d-block text-start" type="text" placeholder="Steve"/>
    </form>
    )
}

function Page2() {
    
    return(
    <form>
        <label className="d-block text-start">Workspace Name</label>
        <input className="d-block text-start" type="text" placeholder="Eden"/>
        <div class="col-auto text-start form">
            <label class=" text-start">Workspace URL <small className="text-muted">optional</small></label>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
            <div class="input-group-text">www.abc.com</div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
        </div>
    </div>
    </form>
    )
}
function Page3() {
    function handleCard() {
        document.querySelector('.card1').classList.toggle('cardactive');
        document.querySelector('.card2').classList.remove('cardactive2');
    }
    function handleCard2() {
        document.querySelector('.card2').classList.toggle('cardactive2')
        document.querySelector('.card1').classList.remove('cardactive')
    }
    return(
    <div className="row justify-content-center">
    <div className="col-sm-6 col-lg-5">
        <div  className="card card1">
        <div className="card-body text-start" onClick={handleCard}>
            <p><i className="fas fa-user"></i></p>
            <p className="card-title"><strong>For myself</strong></p>
            <p className="card-text">White better. Think more clearly. Stay organised</p>
        </div>
        </div>
    </div>
    <div className="col-sm-6 col-lg-5">
        <div  className="card card2" >
        <div className="card-body text-start " onClick={handleCard2}>
            <p><i className="fas fa-users"></i></p>
            <p className="card-title"><strong>For myself</strong></p>
            <p className="card-text">White better. Think more clearly. Stay organised</p>
        </div>
        </div>
    </div>
    </div>
    )
}
export default Form
