interface InputInterface {
    type: string;
}

function Input(props: InputInterface) {
    return (
        <>
            <input type={props.type} />
        </>
    );
}

export default Input;
