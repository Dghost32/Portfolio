import { ReactElement } from "react";
import { FiToggleRight } from "react-icons/fi";
import { JsxElement } from "typescript";

/**
 * Skill type
 * */
type skill = {
  name: string;
  icon: ReactElement | JsxElement;
  filter: filter;
};

/**
 * Object can be wether 0 (if not), 1 (if yes) or not be declared
 * */
type filter = {
  front?: 0 | 1;
  back?: 0 | 1;
  design?: 0 | 1;
};

export default skill;
