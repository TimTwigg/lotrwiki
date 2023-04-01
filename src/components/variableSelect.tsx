import * as React from "react";

type VariableSelectProps = {
    name: string,
    options: string[],
    className?: string,
    onChange: (val: string) => void
}

const VariableSelect = ({ name, options, className, onChange } : VariableSelectProps) => {
    return (
        <select defaultValue = {name} className = {className} onChange = {(v) => {onChange(options[v.target.selectedIndex-1]);}}>
            <option value = {name} disabled>{name}</option>
            {
                options.map((v, i) => <option key = {i}>{v}</option>)
            }
        </select>
    );
}

export default VariableSelect;