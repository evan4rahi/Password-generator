const generatePassword = (level) => {
    const chars = {
        normal: "abcdefghijklmnopqrstuvwxyz1234567890",
        medium: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
        advanced: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
    };
    const length = level === 'advanced' ? 12 : level === 'medium' ? 10 : 8;
    return Array.from({ length }, () => chars[level][Math.floor(Math.random() * chars[level].length)]).join('');
};

module.exports = generatePassword;
