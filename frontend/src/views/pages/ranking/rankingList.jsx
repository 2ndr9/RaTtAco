import React from "react";
import { RankingCard } from "./rankingCard";

export const RankingList = () => {
  return (
    <div>
      <ul>
        <RankingCard time="1:00" name="KANG" />
        <RankingCard time="1:30" name="hoge" />
        <RankingCard time="2:00" name="fuga" />
        <RankingCard time="2:30" name="piyo" />
        <RankingCard time="3:00" name="foo" />
        <RankingCard time="3:30" name="bar" />
        <RankingCard time="4:00" name="buzz" />
        <RankingCard time="4:30" name="jugemu" />
      </ul>
    </div>
  );
};
