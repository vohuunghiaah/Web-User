import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["user.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        Chart: "readonly",
        XLSX: "readonly",
        module: "readonly",
        exports: "readonly",
        // Variables used from other files
        allProduct: "readonly",
        // Variables defined in this file but used elsewhere
        showView: "writable"
      },
      sourceType: "script"
    }
  },
  {
    files: ["products.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        Chart: "readonly",
        XLSX: "readonly",
        module: "readonly",
        exports: "readonly",
        // Global variables defined in user.js
        allProduct: "readonly",
        cart: "writable",
        showView: "readonly",
        addToCart: "readonly",
        renderCart: "readonly",
        renderCheckout: "readonly",
        showPage: "readonly"
      },
      sourceType: "script"
    }
  },
  {
    files: ["mockData.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        module: "readonly",
        exports: "readonly"
      },
      sourceType: "script"
    }
  },
  {
    files: ["js/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        Chart: "readonly",
        XLSX: "readonly",
        editProduct: "readonly",
        module: "readonly",
        exports: "readonly"
      },
      sourceType: "module"
    }
  },
  {
    files: ["eslint.config.mjs"],
    languageOptions: {
      globals: globals.node
    }
  }
];
