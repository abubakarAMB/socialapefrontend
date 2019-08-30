import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/actions/dataActions';

//mui stuffs 
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Profile from '../components/profile/Profile';
import ScreamSkeletonDemo from '../util/ScreamSkeletonDemo';
import ScreamClone from '../components/scream/ScreamClone'
import Grid from '@material-ui/core/Grid';
import ProfilePreview from '../components/profile/ProfilePreview';
const styles = {};

class userTest extends Component {
    
    
    componentDidMount(){
        let user_handle_by_props = this.props.match.params.handle;
        this.props.setUserProfile(user_handle_by_props);
    }
    render() {
        const {loading, screams, classes, user} = this.props;
        console.log(user);
        let recentScreamsMarkup = !loading ? (
           screams.map((scream) => <ScreamClone key={scream.screamId} scream={scream} />)
          ) : (
            <ScreamSkeletonDemo variant="rect" width={210} height={118} />
          );
        return (
            <Grid container spacing={16}>
              <Grid item sm={4} xs={12}>
                <ProfilePreview user={user} />
              </Grid>
              <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
              </Grid>
             
            </Grid>
        )
    }
}
userTest.propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    setUserProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
      loading: state.data.laoding,
      user: state.data.user,
      screams: state.data.screams
  });
  
const mapActionToProps = { setUserProfile };

export default connect(
    mapStateToProps,
    mapActionToProps
  )(withStyles(styles)(userTest)); 
