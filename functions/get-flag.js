exports.handler = async (event, context) => {
    // Authenticate the user using Netlify Identity
    const user = context.clientContext && context.clientContext.user;

    // Check if the user is authenticated and has a specific role
    if (!user) {
        return {
            statusCode: 403,
            body: JSON.stringify({ error: "haha not so easy" }),
        };
    }

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
