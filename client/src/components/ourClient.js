import {  Card,Button } from 'react-bootstrap';
function OurClient({imagesrc,title,caption}){
    console.log('image src',imagesrc);
return (
<div>
    <Card style={{ width: '18rem' }}>   
    <Card.Body>
    <Card.Title>{title}</Card.Title> 
    <Card.Img variant="top" src={imagesrc} />
    <Card.Text className="mt-4 para" >
       {caption}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
</div>    
)

}
export default OurClient;