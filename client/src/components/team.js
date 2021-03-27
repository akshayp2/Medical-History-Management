import { Container,Col,Image,Row } from "react-bootstrap";

function Team() {
return (
    <div className="container mt-5">
    <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-4">
            <img
                width={350}
                height={650}
                className="mr-3"
                style={{borderRadius:"5px"}}
                src="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg"
                alt="Generic placeholder"
            />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-8">
       
        <h1>Why do we use it?</h1>
        <p className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p className="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        </div>
    </div>
    <div className="row mt-4">
    <div className="col-xs-6 col-sm-6 col-md-4"></div>
    <div className="col-xs-6 col-sm-6 col-md-6">
    
    <Container>
            <Row>
            <Col xs={6} md={4}>
                <Image src="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" roundedCircle height="150px" width="150px"/>
            </Col>
            <Col>
            <h1>Professional Team</h1>
            <p className="para mt-2"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </Col>
            </Row>
        </Container>
    </div>
    </div>
    </div>
)    
}
export default Team;