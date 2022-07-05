import { toggleElement, countInteger, arrCountValue } from "@/logic/array";
import {getKeyByValue} from '@/logic/object'
import { useControlStore } from "@/stores/control";
import { useGame18Store } from "@/stores/game18";
import { planetMapping } from "@/map/planet";
const control = useControlStore();
const game18=useGame18Store();
const toggleParams = (v) => {
  toggleElement(control.params, v);
};
const getActiveSector=()=>{
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(((game18.timeNow - 1 + i) % 18) + 1);
  }
  return arr;
}
const getActiveObj=()=>{
  const arr=[];
  for(let i=0; i < 9; i++) {
    arr.push(game18.getObjectBySector(((game18.timeNow - 1 + i)%18)+1));
  }
  return arr;
}
export const researchExc = () => {
  console.log("Research run");
};
export const surveyExc = () => {
  console.log("Survey run");
  const activeSectors=getActiveSector();
  const activeObj=getActiveObj();
  const sectorsIndex=[];
  let type=-1;
  for(let i=0;i<control.params.length;i++) {
    if(Number.isInteger(control.params[i])){
      sectorsIndex.push(activeSectors.indexOf(control.params[i]));
    }else{
      type=planetMapping[control.params[i]];
    }
  }
  if(sectorsIndex[0]>sectorsIndex[1]){
    [sectorsIndex[0],sectorsIndex[1]]=[sectorsIndex[1],sectorsIndex[0]];
  }
  const surveySectors=activeObj.slice(sectorsIndex[0],sectorsIndex[1]+1);
  const result=arrCountValue(surveySectors,type);
  const range=`${activeSectors[sectorsIndex[0]]}-${activeSectors[sectorsIndex[1]]}`
  game18.saveSurveyLog(range,result,getKeyByValue(planetMapping,type));
};
export const targetExc = () => {
  console.log("Target run");
};
export const locateXExc = () => {
  console.log("locate X run");
};
export const surveyTypeClick = (v) => {
  if (control.fn == "survey") {
    if (control.params.length < 3) {
      const index = control.params.findIndex((v) => !Number.isInteger(v));
      if (index == -1) {
        control.params.push(v);
      } else {
        control.params[index] = v;
      }
    }
  }
};
export const sectorClick = (v, isActive) => {
  if (isActive && control.fn != "locate X") {
    if (
      (countInteger(control.params) < 2 && control.fn == "survey") ||
      (control.params < 1 && control.fn == "target")
    ) {
      toggleParams(v);
    }
  } else if (control.fn == "locate X") {
    if (control.params < 1) {
      toggleParams(v);
    }
  }
};
export const researchLetterClick = (v) => {
  if (control.fn == "research" && control.params.length < 1) {
    toggleParams(v);
  }
};
export const addControlFn = (fn) => {
  if (control.fn != fn) {
    control.fn = fn;
  } else {
    control.fn = null;
  }
};
