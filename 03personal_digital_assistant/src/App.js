import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'; // no js extension
import SiriImg from './images/siri.png'; // need extension for non js files
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';

function App() {
    // console.log(SiriImg);
    return (
        <div >
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistant</p>
                 
                </div>
            </section>
            <div className='container'>

            <section className="section">

                <div className="columns is-mobile ">
                    <div className="column ">
                        <ProfileCard 
                        title="alexa" 
                        xHandle="@alexa000" 
                        image={AlexaImg} 
                        description ="Alexa was created by Amazon. found at some year" />
                    </div>
                    <div className="column ">
                        <ProfileCard title="Cortana" xHandle="@cortana" image={CortanaImg}
                        description ="Cortana was created by Microsoft. found at some year" />
                    </div>
                    <div className="column">
                        <ProfileCard title="Siri" xHandle="@siri_apple" image={SiriImg} 
                        description ="Siri was created by Apple. found at some year"/>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default App;