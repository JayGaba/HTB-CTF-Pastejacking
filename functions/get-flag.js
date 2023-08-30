exports.handler = async (event, context) => {
    const flag = process.env.FLAG_SECRET;
    if (!flag) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Flag not set' }),
        };
    }

    if (event.headers['x-requested-with'] !== 'XMLHttpRequest' || event.body !== JSON.stringify({ from: 'pasteEvent' })) {
        return {
            statusCode: 403,
            body: JSON.stringify({ error: 'Forbidden' }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ flag }),
    };
};
