import { useState, useEffect } from "react";

export default function useColorChanger(value: string): string {
    const [color, setColor] = useState("black");

    useEffect(() => {
        const num = Number(value);

        // If the string is not a valid number (like "⚠ Division by 0..."), keep it black
        if (isNaN(num)) {
            setColor("black");
            return;
        }

        // Numeric color logic
        if (num < 0) {
            setColor("red");
        } else {
            setColor("black");
        }
    }, [value]);

    return color;
}
