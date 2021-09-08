import React from "react";
import { RankingCard } from "./rankingCard";
class RankingList extends React.Component {

  timeAssets(number) {
    const hour =  ("0" + Math.floor((number / 3600000) % 60)).slice(-2);
    const minite  =  ("0" + Math.floor((number / 60000) % 60)).slice(-2);
    const sec = ("0" + Math.floor((number / 1000) % 60)).slice(-2);
    const milisec = ("0" + ((number / 10) % 100)).slice(-2);
    const time = hour + ":" + minite + ":" + sec + "." + milisec
    return time
  }

  dateAssets(date) {
    const daTe = new Date(date);
    const Year = daTe.getFullYear();
    const Month = daTe.getMonth() + 1;
    const day = daTe.getDate();
    const when =Year +"/" + Month + "/" + day
    return when
  }

  render() {
    const records = this.props.records
    console.log(records)
    const list = []
    for(const i in records){
      list.push(<RankingCard time={this.timeAssets(records[i].durationTime)} name={records[i].userName} date={this.dateAssets(records[i].startTime)}/>);
    }
    return (
      <section id="ranking">
       {list}
    </section>
  );
};
}
export default RankingList;