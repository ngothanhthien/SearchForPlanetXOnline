import { defineStore } from "pinia";
const NUM_SECTOR=18;
export const useGame18Store = defineStore({
  id: "game18",
  state: () => ({
    timeNow: 1,
    map: {
      conf: {
        A: {
          title: [4],
          body: {
            type: "confClueNoXWithinNY",
            X: 4,
            Y: 4,
            N: 4,
          },
        },
        B: {
          title: [2],
          body: {
            type: "confClueAllXWithin1Y",
            X: 2,
            Y: 0,
          },
        },
        C: {
          title: [1, 2],
          body: {
            type: "confClueNoXWithin1Y",
            X: 1,
            Y: 2,
          },
        },
        D: {
          title: [3, 2],
          body: {
            type: "confClue1PlusXAdjacentY",
            X: 3,
            Y: 2,
          },
        },
        E: {
          title: [4, 1],
          body: {
            type: "confClue1PlusXOppositeY",
            X: 4,
            Y: 1,
          },
        },
        F: {
          title: [3, 1],
          body: {
            type: "confClueAllXWithin1Y",
            X: 3,
            Y: 1,
          },
        },
        X1: {
          title: [9, 3],
          body: {
            type: "confClue9NotWithin1Y",
            X: 9,
            Y: 3,
            N: 1,
          },
        },
        X2: {
          title: [9, 4],
          body: {
            type: "confClue9NotOppositeY",
            X: 9,
            Y: 4,
          },
        },
      },
      info: {
        A: {
          1: [
            {
              3: 4,
            },
            {
              5: 1,
            },
            {
              11: 4,
            },
            {
              13: 2,
            },
          ],
          2: [
            {
              9: 2,
            },
            {
              12: 1,
            },
            {
              14: 4,
            },
            {
              18: 1,
            },
          ],
          3: [
            {
              6: 2,
            },
            {
              7: 3,
            },
            {
              10: 4,
            },
            {
              15: 1,
            },
          ],
        },
        B: {
          1: [
            {
              5: 4,
            },
            {
              7: 2,
            },
            {
              11: 4,
            },
            {
              17: 1,
            },
          ],
          2: [
            {
              1: 4,
            },
            {
              8: 1,
            },
            {
              9: 2,
            },
            {
              16: 1,
            },
          ],
          3: [
            {
              2: 2,
            },
            {
              3: 3,
            },
            {
              10: 4,
            },
            {
              12: 1,
            },
          ],
        },
        C: {
          1: [
            {
              2: 2,
            },
            {
              7: 4,
            },
            {
              11: 4,
            },
            {
              13: 1,
            },
          ],
          2: [
            {
              6: 4,
            },
            {
              8: 1,
            },
            {
              9: 2,
            },
            {
              18: 1,
            },
          ],
          3: [
            {
              3: 3,
            },
            {
              4: 2,
            },
            {
              14: 1,
            },
            {
              17: 4,
            },
          ],
        },
        D: {
          1: [
            {
              2: 2,
            },
            {
              5: 1,
            },
            {
              7: 4,
            },
            {
              17: 4,
            },
          ],
          2: [
            {
              6: 1,
            },
            {
              9: 4,
            },
            {
              16: 1,
            },
            {
              18: 2,
            },
          ],
          3: [
            {
              1: 1,
            },
            {
              12: 4,
            },
            {
              13: 3,
            },
            {
              15: 2,
            },
          ],
        },
        E: {
          1: [
            {
              2: 2,
            },
            {
              3: 4,
            },
            {
              7: 1,
            },
            {
              17: 4,
            },
          ],
          2: [
            {
              1: 1,
            },
            {
              12: 1,
            },
            {
              14: 4,
            },
            {
              15: 2,
            },
          ],
          3: [
            {
              8: 2,
            },
            {
              10: 4,
            },
            {
              11: 1,
            },
            {
              13: 3,
            },
          ],
        },
      },
      obj: {
        1: 2,
        2: 3,
        3: 1,
        4: 1,
        5: 3,
        6: 0,
        7: 0,
        8: 4,
        9: 1,
        10: 1,
        11: 9,
        12: 0,
        13: 4,
        14: 2,
        15: 0,
        16: 2,
        17: 2,
        18: 0,
      },
    },
    mapName: "XQH7",
    player: {
      color: "red",
      research: [],
      target:[],
      surveys: {
        dwarf:[],
        comet:[],
        asteroid:[],
        cloud:[],
        empty:[],
      },
      theories: ["A", "A", "C", "C", "D", "D", "D", "D", "G", "G"],
      point: 0,
      notes: {
        
      },
      position: [1, 1],
      name: 'user1'
    },
    isX1Reveal: false,
    isX2Reveal: false,
  }),
  otherPlayers:{
    user2:{
      color:"purple",
      position:[1,1],
      point:0,
      notes:{
        research:[],
        surveys:[],
      }
    }
  },
  actions: {
    increaseTime(v) {
      this.timeNow=(this.timeNow+v)%NUM_SECTOR+1;
    },
    increasePlayerTime(v) {
      this.player['position'][0]=(this.player['position'][0]+v)%NUM_SECTOR+1;
    },
    getObjectBySector(sector){
      return this.map.obj[sector];
    },
    saveSurveyLog(range,result,type){
      this.player.surveys[type].push({range: range,result:result});
    }
  }
});
