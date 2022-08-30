export default function Switch(props) {
    const { value, onSwitchHandler } = props;

    return (
        <div className="switchContainer" style={{ flex: 1 }}>
            <div className="switchContainer">
                <div
                    className={value === "mm" ? "switch active" : "switch"}
                    onClick={onSwitchHandler}
                >
                    mm
                </div>
                <div
                    className={value === "percent" ? "switch active" : "switch"}
                    onClick={onSwitchHandler}
                >
                    percent
                </div>
            </div>
        </div>
    );
}
