import React, {Component} from 'react';
import {Card, CardBody, CardImg,  CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish!=null){
            return(
                dish.comments.map((comments) =>{
                    return(
                        <div class="container">
                                     <li key={comments.id}>
                            {comments.comment}
                            <p>
                                -- {comments.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'})
                                .format(new Date(Date.parse(comments.date)))}
                            </p>
                        </li>
                        </div>
                   
                    );
                })
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render (){
        if(this.props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {this.renderComments(this.props.dish)}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
                    
                </div>
            );
        }
    }
}











export default DishDetail;