import { Container,Col,Image,Row } from "react-bootstrap";
function OurServices(){
return(
    <div className="Container mt-4">
     <h3 className="row justify-content-center subheader p-2">Services &#38; Technology</h3>
    <div className="mt-5">
    <Container>
    <Row>
    <Col xs={6} md={3}>
        <Image src="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" roundedCircle height="200px" width="200px"/>
    </Col>
    <Col>
    <p className="mt-3 para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </Col>
    </Row>
    </Container>
    </div>
    <div className="container mt-4">
        <h1>How can we help you</h1>
        <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
    </div>
);
}
export default OurServices;