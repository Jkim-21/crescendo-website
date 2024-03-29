const createSubscription = async (amount, firstName, lastName, email) => {
    const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            amount: amount
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        console.error(`API call failed: ${error}`);
        return;
    }

    const data = await response.json();
    console.log(data.paymentIntent.amount);

    return data.paymentIntent;
};

export default createSubscription;