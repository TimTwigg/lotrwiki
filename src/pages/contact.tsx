import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { useForm, ValidationError } from "@formspree/react";
import Layout from "../components/layout";

const ContactPage: React.FC<PageProps> = () => {
    const [state, handleSubmit] = useForm("mqkoydbw");
    if (state.succeeded) {
        return (
            <Layout title = "        ">
                <h1>Contact Me</h1>
                <p className = "middle">Message received!</p>
                <hr/>
            </Layout>
        );
    }

    return (
        <Layout title = "        ">
            <h1>Contact Me</h1>
            <p className = "middle">
                Please fill out the below form to contact the developer about a bug on the site or a feature request.
            </p>
            <hr/>

            <form onSubmit = {handleSubmit} className = "container">
                <label htmlFor = "name" className = "three columns">Name<span className = "red">*</span></label>
                <input id = "name" type = "text" name = "name" className = "nine columns" placeholder = "Gimli Gloin's Son" required/>
                <div className = "spacer"/>
                
                <label htmlFor = "email" className = "three columns nolmargin">Email Address<span className = "red">*</span></label>
                <input id = "email" type = "email" name = "email" className = "nine columns" placeholder = "gimli@glitteringcaves.org" required/>
                <ValidationError prefix = "Email" field = "email" errors = {state.errors}/>
                <div className = "spacer"/>
                
                <textarea id = "message" name = "message" className = "twelve columns" placeholder = "Nobody tosses a dwarf!" required/>
                <ValidationError prefix = "Message" field = "message" errors = {state.errors}/>
                <div className = "spacer"/>

                <button type = "submit" disabled = {state.submitting} className = "three columns offset-by-eight columns">Submit</button>
            </form>
        </Layout>
    );
}

export default ContactPage;

export const Head: HeadFC = () => <title>LOTRWiki | Contact</title>;