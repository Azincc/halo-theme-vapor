/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "selector",
  content: ["./templates/**/*.html", "./src/main.ts"],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    typography: (theme) => ({
      invert: {
        css: {
          "--tw-prose-body": "var(--tw-prose-invert-body)",
          "--tw-prose-headings": "var(--tw-prose-invert-headings)",
          "--tw-prose-links": "var(--tw-prose-invert-links)",
          "--tw-prose-links-hover": "var(--tw-prose-invert-links-hover)",
          "--tw-prose-underline": "var(--tw-prose-invert-underline)",
          "--tw-prose-underline-hover": "var(--tw-prose-invert-underline-hover)",
          "--tw-prose-bold": "var(--tw-prose-invert-bold)",
          "--tw-prose-counters": "var(--tw-prose-invert-counters)",
          "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
          "--tw-prose-hr": "var(--tw-prose-invert-hr)",
          "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
          "--tw-prose-captions": "var(--tw-prose-invert-captions)",
          "--tw-prose-code": "var(--tw-prose-invert-code)",
          "--tw-prose-code-bg": "var(--tw-prose-invert-code-bg)",
          "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
          "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
          "--tw-prose-pre-border": "var(--tw-prose-invert-pre-border)",
          "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
          "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)",
        },
      },
      DEFAULT: {
        css: {
          "--tw-prose-body": theme("colors.zinc.600"),
          "--tw-prose-headings": theme("colors.zinc.900"),
          "--tw-prose-links": theme("colors.teal.500"),
          "--tw-prose-links-hover": theme("colors.teal.600"),
          "--tw-prose-underline": theme("colors.teal.500 / 0.2"),
          "--tw-prose-underline-hover": theme("colors.teal.500"),
          "--tw-prose-bold": theme("colors.zinc.900"),
          "--tw-prose-counters": theme("colors.zinc.900"),
          "--tw-prose-bullets": theme("colors.zinc.900"),
          "--tw-prose-hr": theme("colors.zinc.100"),
          "--tw-prose-quote-borders": theme("colors.yellow.300"),
          "--tw-prose-captions": theme("colors.zinc.400"),
          "--tw-prose-code": theme("colors.zinc.700"),
          "--tw-prose-code-bg": theme("colors.zinc.300 / 0.2"),
          "--tw-prose-pre-code": theme("colors.zinc.100"),
          "--tw-prose-pre-bg": theme("colors.zinc.900"),
          "--tw-prose-pre-border": theme("colors.zinc.200"),
          "--tw-prose-th-borders": theme("colors.zinc.200"),
          "--tw-prose-td-borders": theme("colors.zinc.100"),

          "--tw-prose-invert-body": theme("colors.zinc.400"),
          "--tw-prose-invert-headings": theme("colors.zinc.200"),
          "--tw-prose-invert-links": theme("colors.teal.400"),
          "--tw-prose-invert-links-hover": theme("colors.teal.400"),
          "--tw-prose-invert-underline": theme("colors.teal.400 / 0.3"),
          "--tw-prose-invert-underline-hover": theme("colors.teal.400"),
          "--tw-prose-invert-bold": theme("colors.zinc.200"),
          "--tw-prose-invert-counters": theme("colors.zinc.200"),
          "--tw-prose-invert-bullets": theme("colors.zinc.200"),
          "--tw-prose-invert-hr": theme("colors.zinc.700 / 0.4"),
          "--tw-prose-invert-quote-borders": theme("colors.yellow.600"),
          "--tw-prose-invert-captions": theme("colors.zinc.500"),
          "--tw-prose-invert-code": theme("colors.zinc.300"),
          "--tw-prose-invert-code-bg": theme("colors.zinc.200 / 0.05"),
          "--tw-prose-invert-pre-code": theme("colors.zinc.100"),
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 0.4)",
          "--tw-prose-invert-pre-border": theme("colors.zinc.200 / 0.1"),
          "--tw-prose-invert-th-borders": theme("colors.zinc.700"),
          "--tw-prose-invert-td-borders": theme("colors.zinc.800"),

          // Base
          color: "var(--tw-prose-body)",
          lineHeight: theme("lineHeight.7"),
          "> *": {
            marginTop: theme("spacing.10"),
            marginBottom: theme("spacing.10"),
          },
          p: {
            marginTop: theme("spacing.7"),
            marginBottom: theme("spacing.7"),
          },

          // Headings
          "h2, h3": {
            color: "var(--tw-prose-headings)",
            fontWeight: theme("fontWeight.bold"),
          },
          h2: {
            fontSize: theme("fontSize.xl")[0],
            lineHeight: theme("lineHeight.7"),
            marginTop: theme("spacing.20"),
            marginBottom: theme("spacing.4"),
          },
          h3: {
            fontSize: theme("fontSize.base")[0],
            lineHeight: theme("lineHeight.7"),
            marginTop: theme("spacing.4"),
            marginBottom: theme("spacing.4"),
          },
          ":is(h2, h3) + *": {
            marginTop: 0,
          },

          // Inline elements
          a: {
            color: "var(--tw-prose-links)",
            fontWeight: theme("fontWeight.semibold"),
            textDecoration: "underline",
            textDecorationColor: "var(--tw-prose-underline)",
            transitionProperty: "color, text-decoration-color",
            transitionDuration: theme("transitionDuration.150"),
            transitionTimingFunction: theme("transitionTimingFunction.in-out"),
          },
          "a:hover": {
            color: "var(--tw-prose-links-hover)",
            textDecorationColor: "var(--tw-prose-underline-hover)",
          },
          strong: {
            color: "var(--tw-prose-bold)",
            fontWeight: theme("fontWeight.semibold"),
          },
          mark: {
            display: "inline-block",
            background: "transparent !important",
            fontSize: theme("fontSize.sm")[0],
            fontWeight: theme("fontWeight.semibold"),
            margin: "0 3px",
            boxDecorationBreak: "clone",
            textDecoration: "underline wavy",
            textDecorationThickness: "from-font",
            textUnderlineOffset: "3px",
          },
          code: {
            display: "inline-block",
            color: "var(--tw-prose-code)",
            fontSize: theme("fontSize.sm")[0],
            fontWeight: theme("fontWeight.semibold"),
            backgroundColor: "var(--tw-prose-code-bg)",
            borderRadius: theme("borderRadius.lg"),
            paddingLeft: theme("spacing.1"),
            paddingRight: theme("spacing.1"),
          },
          "a code": {
            color: "inherit",
          },
          ":is(h2, h3) code": {
            fontWeight: theme("fontWeight.bold"),
          },

          // Quotes
          blockquote: {
            paddingLeft: theme("spacing.6"),
            borderLeftWidth: theme("borderWidth.2"),
            borderLeftColor: "var(--tw-prose-quote-borders)",
            fontStyle: "italic",
          },

          // Figures
          figcaption: {
            color: "var(--tw-prose-captions)",
            fontSize: theme("fontSize.sm")[0],
            lineHeight: theme("lineHeight.6"),
            marginTop: theme("spacing.3"),
          },
          "figcaption > p": {
            margin: 0,
          },

          // Lists
          ul: {
            listStyleType: "disc",
          },
          ol: {
            listStyleType: "decimal",
          },
          "ul, ol": {
            paddingLeft: theme("spacing.6"),
          },
          li: {
            marginTop: theme("spacing.3"),
            marginBottom: theme("spacing.3"),
            paddingLeft: theme("spacing[1]"),
          },
          "li::marker": {
            fontSize: theme("fontSize.sm")[0],
            fontWeight: theme("fontWeight.semibold"),
          },
          "ol > li::marker": {
            color: "var(--tw-prose-counters)",
          },
          "ul > li::marker": {
            color: "var(--tw-prose-bullets)",
          },
          "li :is(ol, ul)": {
            marginTop: theme("spacing.4"),
            marginBottom: theme("spacing.4"),
          },
          "li :is(li, p)": {
            marginTop: theme("spacing.3"),
            marginBottom: theme("spacing.3"),
          },

          // Code blocks
          // pre: {
          //   color: "var(--tw-prose-pre-code)",
          //   fontSize: theme("fontSize.sm")[0],
          //   fontWeight: theme("fontWeight.medium"),
          //   backgroundColor: "var(--tw-prose-pre-bg)",
          //   borderRadius: theme("borderRadius.3xl"),
          //   borderTopLeftRadius: 0,
          //   borderTopRightRadius: 0,
          //   padding: theme("spacing.6"),
          //   overflowX: "auto",
          // },
          // "pre code": {
          //   display: "inline",
          //   color: "inherit",
          //   fontSize: "inherit",
          //   fontWeight: "inherit",
          //   backgroundColor: "transparent",
          //   borderRadius: 0,
          //   padding: 0,
          // },

          // Horizontal rules
          hr: {
            marginTop: theme("spacing.20"),
            marginBottom: theme("spacing.20"),
            borderTopWidth: "1px",
            borderColor: "var(--tw-prose-hr)",
            "@screen lg": {
              marginLeft: `calc(${theme("spacing.12")} * -1)`,
              marginRight: `calc(${theme("spacing.12")} * -1)`,
            },
          },

          // Tables
          table: {
            width: "100% !important",
            tableLayout: "auto",
            textAlign: "left",
            fontSize: theme("fontSize.sm")[0],
          },
          thead: {
            borderBottomWidth: "1px",
            borderBottomColor: "var(--tw-prose-th-borders)",
          },
          "thead th": {
            color: "var(--tw-prose-headings)",
            fontWeight: theme("fontWeight.semibold"),
            verticalAlign: "bottom",
            paddingBottom: theme("spacing.2"),
          },
          "thead th:not(:first-child)": {
            paddingLeft: theme("spacing.2"),
          },
          "thead th:not(:last-child)": {
            paddingRight: theme("spacing.2"),
          },
          "tbody tr": {
            borderBottomWidth: "1px",
            height: "auto !important",
            borderBottomColor: "var(--tw-prose-td-borders)",
          },
          "tbody tr p": {
            margin: 0,
          },
          "tbody tr:last-child": {
            borderBottomWidth: 0,
          },
          "tbody td": {
            verticalAlign: "baseline",
          },
          tfoot: {
            borderTopWidth: "1px",
            borderTopColor: "var(--tw-prose-th-borders)",
          },
          "tfoot td": {
            verticalAlign: "top",
          },
          ":is(tbody, tfoot) td": {
            paddingTop: theme("spacing.2"),
            paddingBottom: theme("spacing.2"),
          },
          ":is(tbody, tfoot) td:not(:first-child)": {
            paddingLeft: theme("spacing.2"),
          },
          ":is(tbody, tfoot) td:not(:last-child)": {
            paddingRight: theme("spacing.2"),
          },
        },
      },
    }),
    extend: {
      colors: {
        primary: {
          900: "#000212",
        },
        // light mode
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229", // custom
            muted: "#172554", // blue-950
            subtle: "#1e40af", // blue-800
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#60a5fa", // blue-400
            inverted: "#030712", // gray-950
          },
          background: {
            muted: "#131A2B", // custom
            subtle: "#1f2937", // gray-800
            DEFAULT: "#111827", // gray-900
            emphasis: "#d1d5db", // gray-300
          },
          border: {
            DEFAULT: "#1f2937", // gray-800
          },
          ring: {
            DEFAULT: "#1f2937", // gray-800
          },
          content: {
            subtle: "#4b5563", // gray-600
            DEFAULT: "#6b7280", // gray-600
            emphasis: "#e5e7eb", // gray-200
            strong: "#f9fafb", // gray-50
            inverted: "#000000", // black
          },
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },

      animation: {
        typing: "typing-pulse 1.35s steps(1, end) infinite",
      },

      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },

      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },

      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@headlessui/tailwindcss")],
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern: /^p(?:t|r|b|l|x|y)-(.*)$/,
    },
    {
      pattern: /^m(?:t|r|b|l|x|y)-(.*)$/,
    },
    "flex",
    "items-center",
    "justify-between",
    "mb-[1em]",
    "gap-2",
    "text-zinc-600",
    "dark:text-zinc-400",
    "group",
    "comment-form",
    "relative",
    "w-full",
    "flex-col",
    "rounded-xl",
    "bg-gradient-to-b",
    "from-zinc-50/50",
    "to-white/70",
    "shadow-xl",
    "shadow-zinc-500/10",
    "ring-2",
    "ring-zinc-200/30",
    "transition-opacity",
    "[--spotlight-color:rgb(236_252_203_/_0.25)]",
    "dark:from-zinc-900/70",
    "dark:to-zinc-800/60",
    "dark:shadow-zinc-700/10",
    "dark:ring-zinc-700/30",
    "dark:[--spotlight-color:rgb(217_249_157_/_0.04)]",
    "md:p-4",
    "block",
    "resize-none",
    "shrink-0",
    "border-0",
    "bg-transparent",
    "leading-6",
    "placeholder-zinc-400",
    "outline-none",
    "focus:outline-none",
    "focus:ring-0",
    "dark:text-zinc-200",
    "dark:placeholder-zinc-500",
    "h-[1px]",
    "bg-zinc-100",
    "dark:bg-zinc-800",
    "opacity-25",
    "transition-all",
    "duration-[325]",
    "-mb-1.5",
    "h-5",
    "flex-1",
    "border-t-1",
    "gap-2",
    "w-[1px]",
    "h-4",
    "select-none",
    "gap-2.5",
    "emoticon-panel",
    "bg-zinc-100",
    "dark:bg-zinc-800",
    "appearance-none",
    "text-xl",
    "text-zinc-800",
    "translate-y-0.5",
    "place-items-baseline",
    "items-baseline",
    "px-0.5",
    "text-[0.95em]",
    "leading-none",
    "my-[2em]",
    "left-5",
    "top-14",
    "h-[calc(100%-4.5rem)]",
    "w-0.5",
    "rounded",
    "space-x-3",
    "rounded-full",
    "w-10",
    "w-6",
    "h-6",
    "-mt-1",
    "opacity-40",
    "!leading-[1]",
    "-mt-4",
    "pl-[3.25rem]",
    "gap-x-3",
    "mr-[2px]",
    "md:p-4",
    "p-3",
    "border-t-1",
    "p-0",
    "md:w-[1px]",
    "md:h-4",
    "md:w-auto",
    "dark:bg-zinc-700",
    "!text-[20px]",
    "-mt-2",
    "text-zinc-200",
    "md:w-[300px]",
    "md:min-w-[200px]",
    "md:flex-row",
    "text-[10px]",
    "-top-[2.5em]",
    "min-h-[96px]",
    "dark:bg-zinc-200",
    "dark:text-black",
    "dark:hover:bg-zinc-300",
    "dark:active:bg-zinc-300/70",
    "max-w-[69%]",
    "bg-blue-400/20",
    "dark:bg-blue-400/20",
    "text-[14px]",
    "bottom-2",
  ],
};
