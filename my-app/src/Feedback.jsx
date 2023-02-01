import "./Feedback.css"

function Feedback() {
    return (
        <div className="Feedback">
            <div className="conatiner">
                <div className="container_feedback_are_status">
                    <div className="conatainer_feedback">
                        <p>Introducing Xref</p>
                        <h1>Get feedback across the entire talent journey</h1>
                    </div>
                    <div className="container_status">
                        <div className="container_status_simple">
                            <h3>Simple</h3>
                            <p>Save time: Create and send a survey in as little as 30 seconds. Feedback is compiled in easy to understand graphs for actionable insights.</p>
                        </div>
                        <div className="container_status_simple">
                            <h3>Convenient</h3>
                            <p>Reduce admin: Surveys can be created and completed anywhere, any time, on any device. Let automation do the rest.</p>
                        </div>
                        <div className="container_status_simple">
                            <h3>Secure</h3>
                            <p>Ensure peace of mind: Xref is ISO27001 certified and GDPR compliant so your data is kept safe and secure.</p>
                        </div>
                    </div>
                </div>
                <div className="container_cards">
                    <div className="card_reference">
                        <div className="card_icon">
                            <h1>A</h1>
                        </div>
                        <div className="card_info">
                            <h5>Reference</h5>
                            <div className="wrapper_card_recruit">
                                <span><h2>Recruit</h2></span> 
                                <h2>only the best validated talent.</h2>
                            </div>
                            <p>Reduce time to hire and secure top talent fast. Make informed, compliant hiring decisions with Xref’s automated reference checking software.</p>
                        </div>
                    </div>
                    <div className="card_reference">
                        <div className="card_icon">
                            <h1>B</h1>
                        </div>
                        <div className="card_info">
                            <h5>Pulse</h5>
                            <div className="wrapper_card_recruit">
                                <span><h2>Retain</h2></span>
                                <h2>your people and make meaningful</h2>
                            </div>
                            <p>Want the secret to reduce attrition and understand what metrics your organisation performs well at or can improve upon? Conduct a Pulse Survey.</p>
                        </div>
                    </div>
                    <div className="card_reference">
                        <div className="card_icon">
                            <h1>C</h1>
                        </div>
                        <div className="card_info">
                            <h5>Exits</h5>
                            <div className="wrapper_card_recruit">
                                <span><h2>Recruit</h2></span>
                                <h2>only the best validated talent.</h2>
                            </div>
                            <p>Reduce time to hire and secure top talent fast. Make informed, compliant hiring decisions with Xref’s automated reference checking software.</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Feedback