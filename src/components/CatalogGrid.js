import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1762,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});



const tileData = [{"id":1,"item_name":"Gecko, barking","description":"Reposition Left Internal Mammary Artery, Perc Endo Approach","price":"311","image":"http://dummyimage.com/606x581.png/cc0000/ffffff"},
{"id":2,"item_name":"Grenadier, purple","description":"Replacement of R Axilla Vein with Nonaut Sub, Open Approach","price":"859","image":"http://dummyimage.com/847x346.bmp/5fa2dd/ffffff"},
{"id":3,"item_name":"Southern ground hornbill","description":"Replacement of R Int Mamm Art with Nonaut Sub, Open Approach","price":"918","image":"http://dummyimage.com/993x336.bmp/5fa2dd/ffffff"},
{"id":4,"item_name":"Black kite","description":"Removal of Radioactive Element from Hepatobiliary Duct, Endo","price":"926","image":"http://dummyimage.com/833x287.png/5fa2dd/ffffff"},
{"id":5,"item_name":"Great egret","description":"Destruction of Left Tympanic Membrane, Percutaneous Approach","price":"287","image":"http://dummyimage.com/280x284.png/dddddd/000000"},
{"id":6,"item_name":"Waterbuck, common","description":"Drainage of R Ext Auditory Canal with Drain Dev, Endo","price":"160","image":null},
{"id":7,"item_name":"Crab-eating fox","description":"Excision of Right Glenoid Cavity, Open Approach","price":"827","image":"http://dummyimage.com/973x383.jpg/dddddd/000000"},
{"id":8,"item_name":"Klipspringer","description":"Tinnitus Masker Assessment using Hear Aid Equipment","price":"366","image":"http://dummyimage.com/513x508.jpg/cc0000/ffffff"},
{"id":9,"item_name":"Stick insect","description":"Bypass L Popl Art to Low Ex Art w Synth Sub, Open","price":"653","image":"http://dummyimage.com/713x306.jpg/ff4444/ffffff"},
{"id":10,"item_name":"Lechwe, kafue flats","description":"Reposition R Low Femur with Intramed Fix, Perc Endo Approach","price":"621","image":"http://dummyimage.com/753x569.jpg/dddddd/000000"},
{"id":11,"item_name":"White-browed owl","description":"Insert Bone Condct Hear Dev in L Inner Ear, Perc Endo","price":"318","image":"http://dummyimage.com/473x519.bmp/ff4444/ffffff"},
{"id":12,"item_name":"Hornbill, southern ground","description":"Excision of Right Lower Lobe Bronchus, Via Opening","price":"002","image":"http://dummyimage.com/588x147.bmp/cc0000/ffffff"},
{"id":13,"item_name":"Iguana, land","description":"Bypass Com Bile Duct to R Hep Duc w Intralum Dev, Open","price":"808","image":"http://dummyimage.com/524x175.png/5fa2dd/ffffff"},
{"id":14,"item_name":"Loris, slender","description":"Bypass Left Hepatic Duct to Duodenum, Open Approach","price":"449","image":"http://dummyimage.com/619x475.png/cc0000/ffffff"},
{"id":15,"item_name":"Jaguarundi","description":"Replacement of R Parotid Duct with Autol Sub, Open Approach","price":"532","image":"http://dummyimage.com/728x367.bmp/ff4444/ffffff"},
{"id":16,"item_name":"Lesser flamingo","description":"Extirpate of Matter from R Shoulder Bursa/Lig, Open Approach","price":"868","image":"http://dummyimage.com/348x112.bmp/ff4444/ffffff"},
{"id":17,"item_name":"Cobra, cape","description":"Revision of Nonaut Sub in L Carpal, Perc Endo Approach","price":"669","image":"http://dummyimage.com/1010x108.jpg/cc0000/ffffff"},
{"id":18,"item_name":"Lion, california sea","description":"Supplement L Cephalic Vein w Autol Sub, Perc Endo","price":"136","image":"http://dummyimage.com/750x430.jpg/dddddd/000000"},
{"id":19,"item_name":"Loris, slender","description":"Drainage of Left Upper Eyelid, Percutaneous Approach","price":"502","image":"http://dummyimage.com/601x242.jpg/dddddd/000000"},
{"id":20,"item_name":"Giant girdled lizard","description":"Resection of Sigmoid Colon, Percutaneous Endoscopic Approach","price":"489","image":"http://dummyimage.com/962x578.bmp/dddddd/000000"}];

function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.image} cols={.5} rows={1}>
            <img src={tile.image} alt={tile.item_name} />
          <Link to ={`/postpage/${tile.id}`} >
            <GridListTileBar
              title={tile.item_name}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
           </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);