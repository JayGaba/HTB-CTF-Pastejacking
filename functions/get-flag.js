exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "hmmmmmmmmm" }),
    };
};

exports.getFlag = async (event, context) => {
    const flag = process.env.FLAG_SECRET;
    if (!flag) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Flag not available" }),
        };
    }

    const requestBody = JSON.parse(event.body);
    if (requestBody.paste === flag) {
        return {
            statusCode: 200,
            body: JSON.stringify({ flag }),
        };
    } else {
        return {
            statusCode: 403,
            body: JSON.stringify({ error: "Incorrect input" }),
        };
    }
};
