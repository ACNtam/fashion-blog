import { ImInstagram } from "react-icons/im";


const Contact = ()=>{
    return(
        <div className="contact-page">
            <h1>Alice Chu</h1>
            <h1>alice@fashion.com</h1>
            <h2>ImInstagram <ImInstagram /> </h2>
            <form>
                <label>Email</label>
                <input type="text"/>
                <button>Subscribe</button>
            </form>



        </div>
    )
}

export default Contact;