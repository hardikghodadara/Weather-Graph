export default function Slider(props) {
    const { value, onChangeHandler, min, max } = props;

    return (
        <>
            <input
                type="range"
                max={max}
                min={min}
                value={value}
                onChange={onChangeHandler}
                style={{ width: "100%" }}
            />
            <div
                className="switchContainer"
                style={{ justifyContent: "space-between" }}
            >
                <div>{min}</div>
                <div>{value}</div>
                <div>{max}</div>
            </div>
        </>
    );
}
