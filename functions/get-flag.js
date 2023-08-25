exports.handler = async (event, context) => {
    const flag = "HTB{ }"; 
    return {
        statusCode: 200,
        body: JSON.stringify({ flag }),
    };
};
