export default function isPalindrome (str: string): boolean {
    if (str === '' || str.length === 1) {
        return true;
    }

    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
    
    if (cleanedStr === cleanedStr.split('').reverse().join('')) {
        return true;
    }

    return false;
} 