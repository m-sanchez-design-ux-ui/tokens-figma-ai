# Agent Instructions

## Code Generation Guidelines

* **Respect all existing files and directories.** Do not delete, modify, or overwrite `tailwind-tokens.js`, `tailwind.config.js`, or any files within the `tokens/` directory.
* **Use the existing design system.** The design system is based on Figma Tokens exported to JSON and integrated with Tailwind CSS via `style-dictionary`. The AI must use the custom utility classes derived from these tokens.
* **Translate Figma styles to our custom Tailwind utility classes.** Map Figma's token values to the correct utility classes defined in `tailwind.config.js`. For example:
    * **Border radius:** For cards, use `rounded-card`. For buttons, use `rounded-button`.
    * **Padding and spacing:** For button padding, use `p-button-lg-y` and `p-button-lg-x`. For card padding, use `p-card`.
    * **Background colors:** For cards, use `bg-card`. For primary buttons, use `bg-primary-button`.
    * **Border colors:** Use `line-button-primary`, `line-button-secondary`, `line-card`.
    * **Text colors:** For secondary buttons, use `text-secondary`. For primary buttons, use `text-contrast`. For the card title, use `text-title`. For the card paragraph, use `text-paragraph`.
    * **Shadows:** For card shadows, use `shadow-shadow-lg`.
    * **Table:** For this component, use the following styles:
        - `rounded-radius-4` for rounded corners.
        - `p-spacing-4` for padding.
        - The `thead` must have text styles `text-sm`, `text-brand-tertiary`, and `font-600`.
        - The `tbody` must have padding `p-spacing-4` and text style `text-xs`.
        - The first column must have text styles `text-secondary` and `font-600`.
        - The rest of the columns must have text styles `text-brand-tertiary` and `font-600`.
        - Icons must have color `fill-brand-secondary`.
        - The link button in the last column must have font-size `text-xs` and weight `font-500`.
    * **Form Components (Input, Select, DatePicker):**
        - The `label` text must have styles `font-weight-500` and `text-sm`.
        - The `input` field must have background `bg-gray-100` and border `border-gray-400`.
        - The `input` and `select` text must have `font-weight-400` and `text-sm`.
        - The `placeholder` text must have color `text-gray-500`.
        - The actual text entered in the `input` field must have color `text-gray-700`.
        - Icons within these components must have color `gray-500`.
        - The functionality of these components (validation, state management, etc.) should follow Flowbite's default implementation.
    * **Filter Component:**
        - This component should be a card with the same padding (`p-card`), border (`line-card`), border radius (`rounded-card`), and shadow (`shadow-shadow-lg`) as other cards in the system.
        - The title text of the filter card must have `text-sm`, `text-gray-700`, and `font-weight-600`.
        - Any icons within the filter component must have color `gray-700`.

* **Build new components only.** Focus on creating new components as instructed in the prompts. The AI's role is to extend the codebase, not to refactor or change it.
* **Use React and Flowbite.** All new components must be written in React and leverage Tailwind CSS with Flowbite components and classes whenever appropriate to maintain consistency with the project's framework.

## Project Context

This project is a React application built with Vite, using a custom design system based on Figma Tokens and Tailwind CSS. The tokens are managed with `style-dictionary` and Flowbite is used for UI components.