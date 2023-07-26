export function validateEmail(email: string): boolean {
    const emailRegExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(email);
}