import {StringBuilder} from "./String.builder";

const sb = new StringBuilder();
const result = sb.append("Hello")
  .append(" ")
  .append("World")
  .insert(5, ",")
  .build();

console.log(result);
