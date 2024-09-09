const { z } = require("zod");

const registerSchema = z.object({
  name: z.string().min(1).max(100),
  username: z.string().min(1).max(100),
  email: z.string().email().optional(),
  password: z.string().min(8).max(100),
});

const loginSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(8).max(100),
});

module.exports = { registerSchema, loginSchema };