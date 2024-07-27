import React, {useState} from "react";


type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [selectedValue, setSelectedValue] = useState<any>(null);

    const selectedItem = props.items.find(i => i.value === selectedValue);

    const handleChange = (value: any) => {
        setSelectedValue(value);
    };

    return (
        <div>
            <div>{selectedItem ? selectedItem.title : "Select an item"}</div>
            {props.items.map((i, index) => (
                <div key={index} onClick={() => handleChange(i.value)}>
                    {i.title}
                </div>
            ))}
        </div>
    );
};
