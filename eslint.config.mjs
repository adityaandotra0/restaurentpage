import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable or adjust specific ESLint rules
      "react/no-unescaped-entities": "off", // Allow unescaped entities like single quotes
      "@typescript-eslint/no-unused-expressions": "off", // Disable unused expressions rule
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variables rule
      "@typescript-eslint/no-explicit-any": "off", // Allow usage of `any`
      "react-hooks/exhaustive-deps": "warn", // Warn instead of error for missing dependencies in useEffect
      "@next/next/no-img-element": "off", // Allow usage of <img> instead of <Image />
      "prefer-const": "off", // Disable prefer-const rule
    },
  },
];

export default eslintConfig;
