exports.handler = async (event, context) => {
    // Authenticate the user using Netlify Identity
    const user = context.clientContext && context.clientContext.user;

    if (!user) {
        return {
            statusCode: 403,
            body: JSON.stringify({ error: "haha not so easy" }),
        };
    }

    const flag = process.env.FLAG_SECRET;
    if (!flag) {
        return {
	@@ -18,8 +14,16 @@ exports.handler = async (event, context) => {
        };
    }

    return {
    statusCode: 200,
    body: JSON.stringify({ flag }),
};
