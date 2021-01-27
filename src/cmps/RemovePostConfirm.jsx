
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export function RemovePostConfirm(toggleRemovePost) {

    return (
        <div className="remove-post-modal">
            <List component="nav" className={"root"} aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Remove post" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Cancel" />
                </ListItem>
            </List>
        </div>
    );
}