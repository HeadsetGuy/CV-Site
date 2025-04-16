import Nav from '@/pages/components/nav';

export default function Dashboard() {
    return (
        <>
            <header>
              <Nav/>
                <div className="imageContainer">
                    <img className="headerImage" alt="header image" src="images/le_me.png" />
                    <div className="aboutText">
                        <p id="aboutTitle">About me <br /></p>
                        <p id="aboutParagraph">
                            Hi! my name is Jeroen and I am a game designer.<br />
                            I specialise in creating graphical solutions for<br />
                            customers with an existential need for something<br />
                            extraordinary inside applications or games.<br />
                            <br />
                            I have a degree in ICT application development<br />
                            (focussed on web) and I am currently studying Creative<br />
                            Media and Gaming Technologies (CMGT) at Saxion Enschede <br />
                            <br />
                            I am currently still working on improving myself while <br />
                            in search of a steady working environment.<br />
                            <span id="topIconHolder">
                                <a href="https://www.linkedin.com/in/jeroen-b-4a2a93115/"><i className="fa fa-linkedin"
                                                                                             aria-hidden="true"></i></a>
                                <a href="mailto:jeroencem@gmail.com?Subject=Hello"><i className="fa fa-envelope"
                                                                                      aria-hidden="true"></i></a>
                            </span>
                        </p>
                    </div>
                </div>
            </header>

            <main>
                <div className="mainContainer">
                    <div className="mainTitle">Experience</div>
                    <div className="articleContainer">
                        <article className="portfolioArticle">
                            <div className="articleInnerImage">
                                <img className="articleImage" alt="header image" src="images/OcianarioDesign.png" />
                            </div>
                            <div className="articleInnerRight">
                                <p className="articleTitle">
                                    OCIANARIO EXPERIENCE
                                </p>
                                <br />
                                <p className="articleText">
                                    This is the third school project made in the first<br />
                                    year of the CMGT course. During this project we
                                    had to find a solution for companies that had to
                                    close due to the corona virus.<br /> We found a
                                    big aquarium in Portugal that suffered from the
                                    results of corona. <br />
                                    <br />
                                    We found a creative solution
                                    to this <br />by designing a virtual aquarium which <br />
                                    needed promotional solutions. So the <br />
                                    merchandise, the website and the game menu<br />
                                    were designed by me.<br />
                                </p>

                            </div>
                        </article>
                        <article className="portfolioArticle">
                            <div className="articleInnerImage">
                                <img className="articleImage" alt="header image" src="images/House.png" />
                            </div>
                            <div className="articleInnerRight">
                                <p className="articleTitle">
                                    MODEL A HOUSE
                                </p>
                                <br />
                                <p className="articleText">
                                    This has been an assisnment we got in school.<br />
                                    We got to make a house in a specific style. We used maya
                                    for the 3d development options, and substance painter for
                                    the textures.<br />
                                    After this we had to upload our product to sketchfab<br />
                                    <a href="https://sketchfab.com/3d-models/cyberpunk-store-5d9e25c3c4644474a1adb2514c8c4183"
                                       className="linkToSketch">Link to sktechfab</a>
                                    <br />
                                </p>
                            </div>
                        </article>
                        <article className="portfolioArticle">
                            <div className="articleInnerImage">
                                <img className="articleImage" alt="header image" src="images/imageryPosterFinal.png" />
                            </div>
                            <div className="articleInnerRight">
                                <p className="articleTitle">
                                    OCIANARIO EXPERIENCE
                                </p>
                                <br />
                                <p className="articleText">
                                    During this project I worked on creating a poster <br />
                                    that described who I was and what I want to represent.
                                    So first we did research on what we wanted to present
                                    to the rest of the world and then make a poster about that.
                                    on the left you'll see the created poster.
                                    <br />
                                </p>

                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </>
    );
}
