import React from "react";
import './videoslider.css';
const VideoSlider=()=>{
    return(
        <div style={{height: '100%', overflowX: 'hidden', textAlign: 'center'}}>
        <div class="csslider infinity" id="slider1">
        <input type="radio" name="slides" checked="checked" id="slides_1"/>
        <input type="radio" name="slides" id="slides_2"/>
        <input type="radio" name="slides" id="slides_3"/>
        <input type="radio" name="slides" id="slides_4"/>
        <input type="radio" name="slides" id="slides_5"/>
        <input type="radio" name="slides" id="slides_6"/>
  <input type="radio" name="slides" id="slides_7"/>
  <input type="radio" name="slides" id="slides_8"/>
  <input type="radio" name="slides" id="slides_9"/>
  <input type="radio" name="slides" id="slides_10"/>
            <ul>
      <li>
             <iframe width="100%" height="400px" src="https://www.youtube.com/embed/LjZAG22S_AE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p/>
                </li>
                <li>
                    <p>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/TghPPv7ioX8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/DNweVuwPOWE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
      <li>
                    <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/2HtzSQAZhPI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/m6vjf8YyhTA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p/>
                    <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/_PZargVQ0A8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p/>
                                  <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/IMBHiRmRnfc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p/>
                                  <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/9ibsHRq3CWI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p/>
                                  <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/0AerErHz9fA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p/>
                                      <p>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/8yNVISc-B0k?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </p>
                </li>
                <li>
                    <p>
                    <video controls preload>
                    <source src="" />
                    </video> 
                    </p>
                </li>
      <li>
                    <p>
                    <video controls preload>
                    <source src="" />
                    </video> 
                    </p>
                </li>
            </ul>
                <div class="arrows">
                    <label for="slides_1"></label>
                    <label for="slides_2"></label>
                    <label for="slides_3"></label>
                    <label for="slides_4"></label>
                    <label for="slides_5"></label>
                    <label for="slides_6"></label>
                    <label for="slides_7"></label>
                    <label for="slides_8"></label>
                    <label for="slides_9"></label>
                    <label for="slides_10"></label>
                    <label class="goto-first" for="slides_1"></label>
                    <label class="goto-last" for="slides_10"></label>
                </div>
                <div class="navigation"> 
                    <div>
                        <label for="slides_1"></label>
                        <label for="slides_2"></label>
                        <label for="slides_3"></label>
                        <label for="slides_4"></label>
                        <label for="slides_5"></label>
                        <label for="slides_6"></label>
                        <label for="slides_7"></label>
                        <label for="slides_8"></label>
                        <label for="slides_9"></label>
                        <label for="slides_10"></label>
                    </div>
                </div>
        </div>
        </div>
    );
}
export default VideoSlider;