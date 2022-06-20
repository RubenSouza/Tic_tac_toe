import { StyleSquare } from "./style";

export default function Square({ value, onClick }) {
  // function witchSquare() {
  //   console.log(props.id);
  // }

  return <StyleSquare onClick={onClick}>{value}</StyleSquare>;
}
