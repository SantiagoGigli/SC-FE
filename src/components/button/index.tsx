import { MuiButton } from "./styles"

type Props = {
    text: string;
    callback: () => void;
}

const Button = ({text, callback}: Props) => {
    return (
        <MuiButton onClick={() => callback()}>
            {text}
        </MuiButton>
    )
}

export default Button