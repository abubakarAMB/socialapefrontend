import React, { Component, Fragment  } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

const styles = (theme) => ({
    ...theme,
    card: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 20
      },
      media: {
        height: 190,
      }
});

class ScreamSkeletonDemo extends Component {
    render() {
        const {classes } = this.props;
        const content = Array.from({ length: 5 }).map((item, index) => (
           <Card className={classes.card} key={index}>
                <CardHeader
                    avatar={<Skeleton variant="circle" width={40} height={40} />}
                    action={ null }
                    title={ <Skeleton height={6} width="80%" />}
                    subheader={<Skeleton height={6} width="40%" />}
                />
                <CardContent>
                    <React.Fragment>
                        <Skeleton height={6} />
                        <Skeleton height={6} width="80%" />
                    </React.Fragment>
                </CardContent>
           </Card>
          ));
          return <Fragment>{content}</Fragment>;
    }
}
ScreamSkeletonDemo.propTypes = {
    classes: PropTypes.object.isRequired
  };
  

export default withStyles(styles)(ScreamSkeletonDemo);
