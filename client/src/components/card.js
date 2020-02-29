import React from 'react';
import { Button, Card, CardText} from 'react-mdl'; 






class Card extends Component{
    render(){
        return(
<div>
    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                 WORD GOES HERE.
            </CardText>
         <CardActions border>
            <Button colored>Get Started</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
</div>)
    }
}
export default Card




