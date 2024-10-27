const userPasswords = {};

const storePassword = (userId, website, username, password) => {
    if (!userPasswords[userId]) userPasswords[userId] = [];
    userPasswords[userId].push({ website, username, password });
};

const getSavedPasswords = (userId) => userPasswords[userId] || [];

const getPasswordHistory = (userId) => userPasswords[userId]?.map(p => p.password) || [];

module.exports = { storePassword, getSavedPasswords, getPasswordHistory };
