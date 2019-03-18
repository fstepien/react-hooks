import { useState, useEffect } from "react";

function useTitleInput(intialValue) {
    const [value, setValue] = useState(intialValue);
    useEffect(() => {
        document.title = value;
    });
    return [value, setValue];
}

export { useTitleInput };
