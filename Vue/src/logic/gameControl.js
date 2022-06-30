import { toggleElement, countInteger, countNotInteger } from "@/logic/array";
import { useControlStore } from "@/stores/control";
const control = useControlStore();
const toggleParams = (v) => {
  toggleElement(control.params, v);
};
const endTurn = () => {
  console.log("end turn");
};
export const researchExc = () => {
  console.log("Research run");
};
export const surveyExc = () => {
  console.log("Survey run");
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
