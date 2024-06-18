type Props = {
    placeholder: string;
    value?: string;
    width?: string;
    height?: string;
    onChange?: (value: string) => void;
}
const TextFiled = ({ width = '100%', height = '20px', onChange, ...props }: Props) => {
    return (
        <input type="text"
            {...props}
            className="text-field"
            style={{ width, height }}
            onChange={(e) => onChange && onChange(e.target.value)}
        />
    );
};
export default TextFiled;