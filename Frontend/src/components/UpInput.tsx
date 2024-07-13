import { Link } from "react-router-dom"
import Input from "./Input"
import { useState } from "react"
import { signupTypes } from "@shekharsid/blog-post"



export const Upinput=()=>{
    const [passwordVisible,setVisible]=useState(false)
    const [inputs,setInputs]=useState<signupTypes>({ //pass types of signup inputs as genric to the state varible so  that we change while mainting the types of the varibles
        email:"",
        name:"",
        password:""

    })

    function togglePasswordVisibility(){
        setVisible(!passwordVisible)
    }
    return(
        <div className="w-full">
            <div className="h-screen flex flex-col items-center justify-center w-auto ">
                <div className=" flex">
                    <div className="text-black font-bold text-3xl mt-4 mx-2"> Create an account </div>
                    {/* <div className="text-amber-400 font-extrabold text-5xl mb-2">
                        ...
                    </div> */}
                </div>
                <div className="text-slate-400 pt-1 font-semibold ">
                    Already have an account ? <Link className="underline" to="/signin">Login</Link>
                </div>
                <div>
                        <Input title="Name" placeholder="Alex" onchange={(e)=>{
                            setInputs((c)=>(
                                {...c,
                                name:e.target.value}//we can't use diff use state cuse of type error
                            ))

                        }}/>
                        <Input title="Email" placeholder="Alex@gmail.com" onchange={(e)=>{
                            setInputs((c)=>( // we use c=>() and not c=>{} cause we want to return the new changes value to setInputs!!
                                {...c,
                                email:e.target.value}
                            ))

                    }}/>
                    <div className="flex">
                        <Input title="password" placeholder="min-6" type={ passwordVisible? "text": "password"} button={true} onclick={()=>togglePasswordVisibility()} buttonClas={passwordVisible} onchange={(e)=>{
                            setInputs((c)=>(
                                {...c,//spread operator will maintain the current value of other things
                                password:e.target.value}
                            ))

                        }}/>
                    </div>
                        <button className="rounded bg-black text-white text-bold items-center mt-7 py-2 mr-10 w-full">
                            Sign Up
                        </button>
        

                
            </div>
            
        </div>
        </div>
    )
}