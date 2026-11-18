export default function xmasTree(height?: number): string {
    if (height === undefined || height <= 0) {
        return "";
    }



    let result = ""
    for (let i = 0; i < height; i++) {
        result += Array(height - i).fill(" ").join("") + Array(2 * i + 1).fill("*").join("") + "\n";
    }
    result += Array(height).fill(" ").join("") + "|";

    return result;
}