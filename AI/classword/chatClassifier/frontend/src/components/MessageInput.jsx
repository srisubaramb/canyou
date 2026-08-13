const MessageInput = ({
    value,
    onChange,
    onClassify,
    onSummarize
}) => {

    return (
        <>
            <textarea
                value={value}
                onChange={onChange}
                placeholder="Enter your text..."
            />

            <div className="buttons">

                <button onClick={onClassify}>
                    Classify
                </button>

                <button onClick={onSummarize}>
                    Summarize
                </button>

                <button>
                    Extract
                </button>

            </div>
        </>
    );
};

export default MessageInput;