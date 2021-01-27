import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardHeader from '@material-ui/core/CardHeader';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { utilService } from '../service/utilService.js';


export function CommentPreview({ comment }) {

    return (
        <List className={"root"}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar aria-label="recipe" className={"avatar"}>
                        <img src={comment.byUser.imgUrl} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={comment.byUser.username} secondary={comment.txt} />
                <CardHeader subheader = {utilService.timeDifference(Date.now(), comment.createdAt)}/>
            </ListItem>
        </List>
    );
}








