import {Card} from 'react-bootstrap';


const MyCard = (props) => {
    return (
        <>
            <Card style={{width: '18rem'}} className={`${props.className}`}>
                <Card.Body>
                    <Card.Header>{props.header}</Card.Header>
                    <Card.Title>{props.title}</Card.Title>
                    {props.children}
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard