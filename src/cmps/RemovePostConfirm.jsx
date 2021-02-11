import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export function RemovePostConfirm({ toggleRemovePost, postToRemove, loggedinUser, removePost }) {

    return (
        <div className="screen" onClick={toggleRemovePost}>
            <div className="remove-post-modal">
                <form type="submit" >
                    <List component="nav" className={"opt-container"} aria-label="mailbox folders">
                        {(postToRemove.userId === loggedinUser._id) &&
                            <ListItem button className="remove-post-confirm-btn-container" onClick={() => removePost()}>
                                <ListItemText primary="Remove post" className="remove-post-confirm-btn" />
                            </ListItem>}
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Cancel" className="cancel-btn" />
                        </ListItem>
                    </List>
                </form>
            </div>
        </div>
    )
}