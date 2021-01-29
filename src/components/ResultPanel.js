import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ResultCard from '../components/ResultCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  grid: {
    maxWidth: 800
   }
});

function ResultPanel({emojiListProps}) {

  const classes = useStyles();

  function displayResult() {
    if (emojiListProps != null) {
      var resultCardList = []
      emojiListProps.map((item, index) => resultCardList.push(
        <Grid item xs={6} spacing={3}>
          <ResultCard key={index} item={item} />
        </Grid>))
      return resultCardList
    } else {
      return ("Nothing to display")
    }
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} direction="row" justify="center" alignItems="center" spacing={2}>
        {displayResult()}
      </Grid>
    </div>
  )

}

export default ResultPanel;
