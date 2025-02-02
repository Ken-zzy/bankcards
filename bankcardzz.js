function validateCreditCard(cardNumber, cardType) {
    // Remove any spaces from the input
    cardNumber = cardNumber.replace(/\s+/g, '');

    // Define regex patterns for different card types
    const cardPatterns = {
        // Visa: Starts with 4, length 13 or 16 digits.
        visa: /^4\d{12}(\d{3})?$/,

        // Mastercard:  Starts with 51 through 55, 16 digits.
        mastercard: /^5[1-5]\d{14}$/,

        // American Express: Starts with 34 or 37, 15 digits.
        amex: /^3[47]\d{13}$/,

        // Verve: Starts with 5060, 5061, 5078, 6500, length 16-19 digits.
        verve: /^(5060|5061|5078|6500)\d{12,15}$/
    };

    // Get the regex for the provided card type (case-insensitive)
    const pattern = cardPatterns[cardType.toLowerCase()];

    if (!pattern) {
        throw new Error(`Unsupported card type: ${cardType}`);
    }

    return pattern.test(cardNumber);
}

