import swaggerJSDoc from "swagger-jsdoc";

const swaggerConfig: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'API Library',
            contact: {
                name: 'Luis',
                email: 'lupequi12@gmail.com'
            },
            description: "Swagger API Library",
        },
        servers: [
            {
                url: `http://localhost:4000/api`,
                description: 'Development server',
            },
        ],

    },

    basePath: '/',
    apis: ['./dist/routes/**.**.js'],

}

export default swaggerConfig;