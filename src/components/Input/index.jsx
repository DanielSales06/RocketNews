import { Container } from "./styles";

import { BsSend } from "react-icons/bs"

export function Input({ icon: Icon, ...rest }) {
  return(
    <Container {...rest}>
      {Icon && <Icon size={20}/>}
      <input
       type="email"
       {...rest}
      />

      <button type="button">
        <BsSend/>
      </button>
    </Container>
  );
}