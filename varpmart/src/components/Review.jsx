import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    padding: 0 20rem;
    /* background-color: aqua; */
    /* gap: 0rem; */
`
const Title = styled.h4`
    font-weight: 100;
    letter-spacing: 15px;
    line-height: 3rem;
    
`

const Line = styled.div`
    width: 6rem;
    border-bottom: 1px solid black;

`

const Text = styled.h3`
    font-weight: 200;
    margin: 2rem 0;
`

const Name = styled.p`
    font-weight: 200;
`

const Review = () => {
    return (
        // <div id="carouselExampleCaptions" className=ame="carousel .carousel-dark slide ">
        //     <div className=ame="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className=ame="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className=ame="carousel-inner">
        //         <div className=ame="carousel-item active ">
        //            <Container>
        //             <Title>Reviews</Title>
        //             <Line></Line>
        //             <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut inventore, rem deserunt quis distinctio saepe!lorem eserunt quis distinctio saepe!lorem</Text>
        //             <Name>Palaash Sarkar </Name>
        //            </Container>
        //         </div>
        //         <div className=ame="carousel-item">
        //             <Container>
        //             <Title>Reviews</Title>
        //             <Line></Line>
        //             <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut inventore, rem deserunt quis distinctio saepe!lorem eserunt quis distinctio saepe!lorem</Text>
        //             <Name>Palaash Sarkar </Name>
        //            </Container>

        //         </div>
        //         <div className=ame="carousel-item">
        //             <Container>
        //             <Title>Reviews</Title>
        //             <Line></Line>
        //             <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut inventore, rem deserunt quis distinctio saepe!lorem eserunt quis distinctio saepe!lorem</Text>
        //             <Name>Palaash Sarkar </Name>
        //            </Container>

        //         </div>
        //     </div>
        //     <button className=ame="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //         <span className=ame="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className=ame="visually-hidden">Previous</span>
        //     </button>
        //     <button className=ame="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //         <span className=ame="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className=ame="visually-hidden">Next</span>
        //     </button>
        // </div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <Container>
                        <Title>Reviews</Title>
                        <Line></Line>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut inventore, rem deserunt quis distinctio saepe!lorem eserunt quis distinctio saepe!lorem</Text>
                        <Name>Palaash Sarkar </Name>
                    </Container>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <Container>
                        <Title>Reviews</Title>
                        <Line></Line>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut inventore, rem deserunt quis distinctio saepe!lorem eserunt quis distinctio saepe!lorem</Text>
                        <Name>Rutuja Manjrekar </Name>
                    </Container>
                </div>
                <div className="carousel-item">
                    <Container>
                        <Title>Reviews</Title>
                        <Line></Line>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut inventore, rem deserunt quis distinctio saepe!lorem eserunt quis distinctio saepe!lorem</Text>
                        <Name>Ankush Roy</Name>
                    </Container>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Review
