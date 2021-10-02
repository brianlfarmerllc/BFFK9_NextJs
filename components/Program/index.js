import programs from "../../db/programs.json";
import ProgramCopy from "../ProgramCopy";

export default function Program() {
  return (
    <>
      {programs.map((program, index) => (
        <ProgramCopy key={index} copy={program} />
      ))}
    </>
  );
}
