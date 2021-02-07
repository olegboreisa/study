import React from 'react'
import classes from './Home.module.css'
import img from '../../assets/pics/art.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faWrench} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

export default () => {

    const article = {
        id: 1,
        date: '2012.12.12',
        title: 'Very smart title',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of set sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    }

    const comments = [
            {id: 1, name: 'Oleg Boreiša', date: '2021.08.08', text: "Funny, Great, Love It!"},
            {id: 2, name: 'Donatas Viaževičius', date: '2019.12.04', text: "Bitch, Please.."},
            {id: 3, name: 'Tautvydas Strolia', date: '2018.11.01', text: "No Woman - No Cry"},
            {id: 4, name: 'Motiejus Grinius', date: '2021.08.08', text: "What I was Reading.."},
            ]


    return (


        <div className={classes.container}>

            <div className={classes.elemUp}>

            </div>

            <div className={classes.elemDown}>

                <div className={classes.left}>

                    <div className={classes.title}>
                        {article.title}
                    </div>

                    <div className={classes.photo}>
                        <img src={img}/>
                    </div>

                </div>

                <div className={classes.right}>

                    <div className={classes.text}>
                        {article.text}
                    </div>

                    <div className={classes.options}>

                        <div className={classes.date}>{article.date}</div>

                        <div className={classes.icons}>
                            <div className={classes.update}>
                                <FontAwesomeIcon icon={faWrench} size={"2x"}/>
                            </div>

                            <div className={classes.delete}>
                                <FontAwesomeIcon icon={faTrash} size={"2x"}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className={classes.commentContainer}>

                <div className={classes.existingComments}>
                    {/*{*/}
                    {/*    comments.map(comment => {*/}
                    {/*        return (*/}
                    {/*            <div className={classes.comment}>*/}
                    {/*                <h6>{comment.name} {comment.date}</h6>*/}
                    {/*                <p>{comment.text}</p>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </div>


                <div className={classes.addComment}>
                        <form>
                            <div className="form-group">
                                <h4>Leave a comment</h4>
                                <label htmlFor="message">Message</label>
                                <textarea name="msg" id="msg" cols="30" rows="5" className="form-control"/>
                            </div>

                            <Button type="submit">Post</Button>

                            <Button type="submit">Comment Section</Button>

                        </form>
                    </div>

            </div>

        </div>
    )
}
