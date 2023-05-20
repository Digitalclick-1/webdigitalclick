import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
const popup=()=>{
    return(
        <Popup  trigger={<Link className="uk-button uk-button-default" >Book a Call</Link>} >

        <div className='popup-whole' id='popup-whole'>
        <div class="row-wholepopup">
        <div class="row">
        
                                        <div class="columnpopup">
                                        <div className="formwhole" style={{marginTop:'0px'}}>
        <div class="container" style={{marginTop:'0px'}}>
        <header class="header">
        
        </header>
        <form className="survey-formpopup" id="survey-formpopup">
        <div class="form-group">
        <label id="name-label" for="name">Full Name</label>
        <input
        type="text"
        name="name"
        id="namex"
        class="form-control"
        placeholder="Enter your full name"
        required
        />
        </div>
        <div class="form-group">
        <label id="email-label" for="email">E-mail</label>
        <input
        type="email"
        name="email"
        id="emailx"
        class="form-control"
        placeholder="Enter your E-mail"
        required
        />
        </div>
        <div class="form-group">
        <label id="name-label" for="name">Company or Project Name</label>
        <input
        type="text"
        name="company"
        id="companyx"
        class="form-control"
        placeholder="Enter your Company/Project Name"
        required
        />
        </div>
        
        <div class="form-group">
        <label>Describe your request in detail</label>
        <textarea 
        id="commentsx"
        class="input-textarea"
        name="comment"
        placeholder="Describe your request in detail here..."
        ></textarea>
        </div>
        
        <div class="form-group">
        <button type="submit" id="submit" class="submit-button">
        Submit
        </button>
        </div>
        </form>
        </div>
        </div>
        
                                        </div>
                                        </div>
                                        </div>
        </div>
        </Popup>
        
    )
}
export default popup;