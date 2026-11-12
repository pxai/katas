export default function songbird(branches: number, birds: number): number {
    if (branches <= 0 || birds <= 0) {
        return 0;
    }
    return Math.pow(branches, birds);
}