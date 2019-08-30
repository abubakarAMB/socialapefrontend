import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
  }
};

 class ProfilePreview extends Component {
  
    render() {
        const {classes, user:{ bio,
            createdAt,
            email,
            handle,
            imageUrl,
            location,
            userId,
            website}} = this.props;
        return (
             <Grid container justify="center" alignItems="center">
               <Avatar alt={handle} src={imageUrl} className={classes.bigAvatar} />
               <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary={email} />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary={handle} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={location} />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary={website} />
                </ListItem>
                </List>
             </Grid>
            
        )
    }
}

export default withStyles(styles)(ProfilePreview);
