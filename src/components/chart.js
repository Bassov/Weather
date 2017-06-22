import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default function(props) {
  return (
    <div>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type={'avg'}/>
      </Sparklines>
      <div className="chart-numbers">
        min:{minimum(props.data)}/
        avg:{average(props.data)}/
        max:{highest(props.data)}
        (units:{props.units})
      </div>
    </div>
  )
}

function average(numbers) {
  return _.round(_.sum(numbers)/numbers.length);
}

function minimum(numbers) {
  return _.round(_.min(numbers))
}

function highest(numbers) {
  return _.round(_.max(numbers))
}