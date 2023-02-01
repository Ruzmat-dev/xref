import './Costumers.css'

function Costumers() {
    return (
        <div className="costumers">
            <div className="costumer_title">
                <p>What our customers say</p>
                <h1>Trusted by the companies you trust</h1>
            </div>
            <div className="costumer_cards">
                <div className="card_learn">
                    <div className=""></div>
                    <div className="wrappere_learn">
                        <h3>How Westpac benefit from Xref’s tailored service</h3>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="card_learn">
                    <div className="emem"></div>
                    <div className="wrappere_learn">
                        <h3>How Westpac benefit from Xref’s tailored service</h3>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="card_learn">
                    <div className=""></div>
                    <div className="wrappere_learn">
                        <h3>How Westpac benefit from Xref’s tailored service</h3>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="over_cards">
                <div className="card_over">
                    <div className="card_user">
                        <h1>Over <span>200</span></h1>
                        <p>User reviews have proven to outperform any other assessments in the consumer world. That’s why we’re proud of what our reviewers have to say.</p>
                        <a href="#">Why users love us</a>
                    </div>
                    <div className="card_gut">
                        <div className="wrapper_big_number">
                            <h1>4.7</h1>
                            <span>gut of</span>
                        </div>
                        <ul>
                            <li> <span>9.4</span> <p>Ease of use</p> </li>
                            <li> <span>9.3</span> <p>Quality of support</p> </li>
                            <li> <span>9.3</span> <p>Ease of setup</p> </li>
                        </ul>
                    </div>
                </div>
                <div className="card_google">
                    <h3>Leading the pack</h3>
                    <div className="Capterra">
                        <p>Capterra</p>
                        <p>Google</p>
                    </div>
                    <div className="rewers">
                        <p>93 reviews as of 7/10/2022</p>
                        <p>744 reviews as <br /> of 7/10/2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Costumers