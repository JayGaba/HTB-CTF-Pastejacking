exports.handler = async (event, context) => {
    const flag = process.env.FLAG_SECRET;
    if (!flag) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Flag not available" }),
        };
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify({ flag }),
    };
};
