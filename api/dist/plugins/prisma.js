"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const client_1 = require("@prisma/client");
const prismaPlugin = async (fastify) => {
    const prisma = new client_1.PrismaClient();
    await prisma.$connect();
    fastify.decorate("prisma", prisma);
    fastify.addHook("onClose", async (instance) => {
        await instance.prisma.$disconnect();
    });
};
exports.default = (0, fastify_plugin_1.default)(prismaPlugin);
